import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    (Story) => {
      // Inject Montserrat font
      if (!document.getElementById('lc-font')) {
        const link = document.createElement('link')
        link.id = 'lc-font'
        link.rel = 'stylesheet'
        link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
        document.head.appendChild(link)
      }
      return Story()
    },
  ],
}

export default preview
