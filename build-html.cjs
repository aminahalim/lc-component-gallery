const fs = require('fs');
const path = require('path');

// Read the built index.html
let html = fs.readFileSync('dist/index.html', 'utf8');

// Find all asset files
const distFiles = fs.readdirSync('dist/assets');
const cssFile = distFiles.find(f => f.endsWith('.css'));
const jsFiles = distFiles.filter(f => f.endsWith('.js'));

// Inline CSS
if (cssFile) {
  const css = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
  const cssRegex = new RegExp('<link[^>]*' + cssFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^>]*>');
  html = html.replace(cssRegex, '<style>' + css + '</style>');
}

// Inline JS - replace script tags with inline scripts
for (const jsFile of jsFiles) {
  const js = fs.readFileSync(path.join('dist/assets', jsFile), 'utf8');
  const jsRegex = new RegExp('<script[^>]*' + jsFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[^>]*><\\/script>');
  html = html.replace(jsRegex, '<script type="module">' + js + '</script>');
}

// Inline favicon
if (fs.existsSync('dist/favicon.svg')) {
  const svg = fs.readFileSync('dist/favicon.svg', 'utf8');
  html = html.replace('/favicon.svg', 'data:image/svg+xml,' + encodeURIComponent(svg));
}

// Add Montserrat font link if not present
if (!html.includes('fonts.googleapis.com')) {
  html = html.replace('</head>',
    '<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">\n</head>');
}

const outputPath = '/Users/amina/Desktop/lc-component-gallery.html';
fs.writeFileSync(outputPath, html);
console.log('Written to: ' + outputPath);
console.log('Size: ' + (html.length / 1024).toFixed(0) + 'KB');
