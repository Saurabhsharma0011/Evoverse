import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Pacifico } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  title: "EvoVerse AI",
  description: "AI-powered multi-chain intelligence & advanced market insights platform",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evo_new_logo_orng-removebg-preview-lrzg4pUuPGkUKZRaVCLj3qkOv2F8t9.png",
    apple:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evo_new_logo_orng-removebg-preview-lrzg4pUuPGkUKZRaVCLj3qkOv2F8t9.png",
  },
  manifest: "/manifest.json",
  themeColor: "#f97316",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://evoverseai.org",
    title: "EvoVerse AI",
    description: "AI-powered multi-chain intelligence & advanced market insights platform",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evo_new_logo_orng-removebg-preview-lrzg4pUuPGkUKZRaVCLj3qkOv2F8t9.png",
        width: 512,
        height: 512,
        alt: "EvoVerse AI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EvoVerse AI",
    description: "AI-powered multi-chain intelligence & advanced market insights platform",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evo_new_logo_orng-removebg-preview-lrzg4pUuPGkUKZRaVCLj3qkOv2F8t9.png",
    ],
    creator: "@EvoVerseAI",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${pacifico.variable}`}>
      <head>
        <title>EvoVerse AI</title>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evo_new_logo_orng-removebg-preview-lrzg4pUuPGkUKZRaVCLj3qkOv2F8t9.png"
          type="image/png"
        />
      </head>
      <body className="min-h-screen bg-black text-white overflow-x-hidden relative">
        <div
          className="fixed inset-0 w-full h-full bg-black"
          style={{
            zIndex: 0,
          }}
        />
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  )
}

