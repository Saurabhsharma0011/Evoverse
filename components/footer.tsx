import Link from "next/link"
import { Twitter, Send } from "lucide-react"
import { Logo } from "./logo"

interface FooterProps {
  onScrollToTerminal: () => void
  onScrollToVideo: () => void
}

export function Footer({ onScrollToTerminal, onScrollToVideo }: FooterProps) {
  return (
    <footer className="relative z-10 border-t border-primary/20 bg-transparent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-semibold">
                <span className="text-white">EvoVerse</span> <span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-primary/60 text-sm">
              AI-powered multi-chain intelligence & advanced market insights platform.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={onScrollToTerminal} className="text-primary/60 hover:text-primary text-sm">
                  EvoTrade AI
                </button>
              </li>
              <li>
                <button onClick={onScrollToVideo} className="text-primary/60 hover:text-primary text-sm">
                  EvoTrack AI Bot
                </button>
              </li>
              <li>
                <button className="text-primary/60 hover:text-primary text-sm">EvoVerse AI</button>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://docs.evoverseai.org" className="text-primary/60 hover:text-primary text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/EvoVerseAIchat"
                  className="text-primary/60 hover:text-primary text-sm flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Telegram Chat
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/EvoVerseAI"
                  className="text-primary/60 hover:text-primary text-sm flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary/20">
          <div className="flex justify-center items-center">
            <p className="text-primary/60 text-sm">© {new Date().getFullYear()} EvoVerse AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

