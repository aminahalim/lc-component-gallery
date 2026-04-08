/**
 * AppHeader (LC App Header)
 *
 * Global top navigation bar. Dark navy background (#011021).
 * 5 variants from the Figma Components section:
 *   Default      — Logo + Login dropdown (unauthenticated)
 *   WithAI       — Logo + Compass AI pill + Login dropdown
 *   Authenticated — Logo + Compass AI pill + User avatar + Settings
 *   MinimalAuth   — Logo + User avatar + Settings (no AI button)
 *   FullSearch    — Logo + search bar (enter to search) + AI icon-only + User + Settings
 *
 * Custom LiquidCompass component — NOT shadcn.
 */
import { ChevronDown, Sparkles, Settings } from 'lucide-react'
import { LCLogo } from '../icons/LCLogo'

export type AppHeaderVariant =
  | 'default'
  | 'withAI'
  | 'authenticated'
  | 'minimalAuth'
  | 'fullSearch'

interface User {
  name: string
  initials: string
  role?: string
}

export interface AppHeaderProps {
  variant?: AppHeaderVariant
  user?: User
  onCompassAIClick?: () => void
  onLoginClick?: () => void
  onSettingsClick?: () => void
  onSearchSubmit?: (query: string) => void
}

export function AppHeader({
  variant = 'authenticated',
  user = { name: 'Sarah Johnson', initials: 'SJ', role: 'Administrator' },
  onCompassAIClick,
  onLoginClick,
  onSettingsClick,
  onSearchSubmit,
}: AppHeaderProps) {
  const showLogin = variant === 'default' || variant === 'withAI'
  const showAI = variant === 'withAI' || variant === 'authenticated' || variant === 'fullSearch'
  const showUser = variant === 'authenticated' || variant === 'minimalAuth' || variant === 'fullSearch'
  const showSearch = variant === 'fullSearch'

  return (
    <header className="h-[70px] bg-[#011021] flex items-center justify-between px-6 xl:px-[136px]">
      {/* Left: Logo + optional search */}
      <div className="flex items-center gap-6">
        {/* Liquid Compass Logo */}
        <LCLogo className="shrink-0" />

        {showSearch && (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const input = form.elements.namedItem('search') as HTMLInputElement
              onSearchSubmit?.(input.value)
            }}
          >
            <div className="bg-[#393839] h-12 rounded-[32px] px-[13px] flex items-center justify-center w-[443px] max-w-[60vw]">
              <input
                name="search"
                type="text"
                placeholder="search by title, role, location, department, order, etc"
                className="bg-transparent text-white text-[17px] leading-[23px] placeholder:text-[#d1d3d4] outline-none w-full"
              />
            </div>
          </form>
        )}
      </div>

      {/* Right: AI button, user info, settings, login */}
      <div className="flex items-center gap-6">
        {showAI && (
          <button
            onClick={onCompassAIClick}
            className={`flex items-center gap-2.5 rounded-3xl text-white font-medium text-sm transition-all hover:opacity-90 ${
              variant === 'fullSearch' ? 'w-16 h-10 justify-center px-5 py-2' : 'px-5 py-2'
            }`}
            style={{
              backgroundImage: 'linear-gradient(93.61deg, #7A40F2 -46.22%, #9CB3FF 144.8%)',
            }}
          >
            {variant !== 'fullSearch' && <span>Compass AI</span>}
            <Sparkles className="w-6 h-6" />
          </button>
        )}

        {showUser && (
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="bg-[#4a5565] rounded-full px-[7px] py-1.5 flex items-center justify-center">
                <span className="text-white text-xs">{user.initials}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[15px] font-medium leading-4 text-right">{user.name}</span>
                {user.role && (
                  <span className="text-[#99a1af] text-xs font-medium leading-[15px]">{user.role}</span>
                )}
              </div>
            </div>
            <button onClick={onSettingsClick} className="text-[#d1d5dc] hover:text-white transition-colors">
              <Settings className="w-[18px] h-5" strokeWidth={1.33} />
            </button>
          </div>
        )}

        {showLogin && (
          <button
            onClick={onLoginClick}
            className="flex items-center gap-2 bg-[#393839] px-5 py-2 rounded-md text-white font-medium text-sm hover:bg-[#4a4a4a] transition-colors"
          >
            Login
            <ChevronDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </header>
  )
}
