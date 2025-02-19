import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EvoVerse AI",
  description: "AI-powered multi-chain intelligence & advanced market insights platform",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>EvoVerse AI</title>
        <meta name="description" content="AI-powered multi-chain intelligence & advanced market insights platform" />
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evo_new_logo_orng-removebg-preview-lrzg4pUuPGkUKZRaVCLj3qkOv2F8t9.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'