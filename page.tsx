"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Zap, Bot, Clock, TrendingUp, Search, Diamond, Twitter, Book, Send } from "lucide-react"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"
import { ErrorBoundary } from "react-error-boundary"

import { Logo } from "@/components/logo"
import { Loading } from "@/components/loading"
import { AIAnalysisSection } from "@/components/ai-analysis-section"
import TerminalSection from "@/components/terminal-section"
import { Footer } from "@/components/footer"
import { StyledButton } from "@/components/styled-button"
import { PremiumFeaturesSection } from "@/components/premium-features-section"
import { HeroSection } from "@/components/hero-section"

const speedData = [
  { name: "EvoVerse AI", speed: 95, color: "rgba(249, 115, 22, 0.8)", hoverColor: "rgba(249, 115, 22, 1)" },
  { name: "ChainGPT AI", speed: 70, color: "rgba(249, 115, 22, 0.6)", hoverColor: "rgba(249, 115, 22, 0.8)" },
  { name: "moAI", speed: 65, color: "rgba(249, 115, 22, 0.4)", hoverColor: "rgba(249, 115, 22, 0.6)" },
  { name: "ELYRAI", speed: 60, color: "rgba(249, 115, 22, 0.2)", hoverColor: "rgba(249, 115, 22, 0.4)" },
]

const systemUsageData = [
  { name: "0s", evoverse: 20, others: 80 },
  { name: "10s", evoverse: 22, others: 85 },
  { name: "20s", evoverse: 18, others: 90 },
  { name: "30s", evoverse: 25, others: 88 },
  { name: "40s", evoverse: 20, others: 95 },
  { name: "50s", evoverse: 22, others: 92 },
  { name: "60s", evoverse: 18, others: 85 },
]

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Lightning-Fast AI Analysis",
    description:
      "EvoVerse AI processes real-time token data in milliseconds, delivering instant market insights and analysis with unmatched speed.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "AI-Powered Market Predictions",
    description:
      "Utilizing advanced AI modeling, EvoVerse AI predicts market trends, liquidity movements, and trading patterns with high accuracy.",
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Whale Activity & Liquidity Tracking",
    description:
      "Stay ahead of the market with real-time tracking of whale movements, liquidity shifts, and smart money inflows across Solana.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "24/7 Market Monitoring",
    description:
      "Continuous AI-powered surveillance of token performance, ensuring you never miss a major market movement.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI-Driven Trading Assistant (EvoTrade AI)",
    description:
      "A command-based AI terminal designed to deliver on-demand market intelligence and token analysis with precision.",
  },
  {
    icon: <Diamond className="w-8 h-8 text-primary" />,
    title: "$EVO Token Utility & Premium Access",
    description:
      "Holding $EVO unlocks premium AI tools, including exclusive access to EvoTrade AI & EvoTrack AI for deeper analytics and insights.",
  },
]

// Define the ErrorFallback component
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-primary">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="mb-4">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-black rounded hover:bg-primary/80"
        >
          Retry
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{isLoading ? <Loading /> : <HomeContent />}</ErrorBoundary>
}

function HomeContent() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const [isScrolled, setIsScrolled] = useState(false)

  const terminalRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTerminal = () => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div className="min-h-screen flex flex-col relative">
      {/* Updated Parallax Background */}
      <motion.div
        className="fixed inset-0 w-full h-[150vh] -top-[25vh]"
        style={{
          y: backgroundY,
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TD6igH1OZ68mwLq7BPxpRfdDespfVI.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Fixed Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center max-w-full">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
              <Logo className="h-10 w-10" />
              <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-md animate-pulse"></div>
            </motion.div>
            <span className="hidden sm:inline text-white">
              EvoVerse <span className="text-primary">AI</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <NavButton onClick={scrollToFeatures} icon={<Zap size={16} />}>
                Features
              </NavButton>
              <NavButton href="https://x.com/EvoVerseAI" icon={<Twitter size={16} />}>
                Twitter
              </NavButton>
              <NavButton href="https://docs.evoverseai.org" icon={<Book size={16} />}>
                Docs
              </NavButton>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Metrics Section */}
        <section id="metrics" className="py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <SectionHeading>Performance Metrics</SectionHeading>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-primary/20 hover:border-primary/40"
              >
                <h3 className="text-primary text-xl font-semibold mb-6">Speed Comparison</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={speedData} layout="vertical" margin={{ left: 120, right: 20, top: 20, bottom: 20 }}>
                      <XAxis
                        type="number"
                        domain={[0, 100]}
                        tick={{ fill: "#f97316", opacity: 0.6 }}
                        axisLine={{ stroke: "#f97316", opacity: 0.2 }}
                      />
                      <YAxis
                        dataKey="name"
                        type="category"
                        width={120}
                        tick={{ fill: "#f97316", opacity: 0.6 }}
                        axisLine={{ stroke: "#f97316", opacity: 0.2 }}
                      />
                      <Tooltip
                        cursor={{ fill: "rgba(249, 115, 22, 0.1)" }}
                        contentStyle={{
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          border: "1px solid rgba(249, 115, 22, 0.2)",
                          borderRadius: "8px",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        }}
                        labelStyle={{ color: "#f97316" }}
                        itemStyle={{ color: "#f97316" }}
                      />
                      <Bar dataKey="speed" radius={[4, 4, 4, 4]}>
                        {speedData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                            style={{
                              filter: "drop-shadow(0 4px 6px rgba(249, 115, 22, 0.1))",
                              transition: "all 0.3s ease",
                            }}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card/30 backdrop-blur-md rounded-xl p-6 border border-primary/20 hover:border-primary/40"
              >
                <h3 className="text-primary text-xl mb-4">System Components Usage</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={systemUsageData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--primary))",
                          borderRadius: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="evoverse"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        name="EvoVerse AI"
                      />
                      <Line
                        type="monotone"
                        dataKey="others"
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth={2}
                        name="Competitors"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-20 relative">
          <SectionHeading>Community Insights</SectionHeading>
          <AIAnalysisSection />
        </section>

        {/* Terminal Section */}
        <section ref={terminalRef} className="py-20 relative">
          <TerminalSection />
        </section>

        {/* Video Section */}
        <section ref={videoRef} className="py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2
                  className="text-[2.5rem] font-bold text-primary font-display mb-2 animate-gradient-x"
                  style={{
                    WebkitTextStroke: "1px #f97316",
                    textShadow: "0 0 10px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  THE AI POWERED HUB FOR SOLANA
                </h2>
                <h3 className="text-4xl mb-4 font-extrabold">
                  <span className="text-white">
                    EvoTrack <span className="text-primary">AI</span>
                  </span>
                </h3>
              </div>

              {/* Video Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="aspect-video w-full rounded-xl overflow-hidden border border-primary/20 bg-black/20 backdrop-blur-sm"
              >
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_2025-02-18_23-04-29-2zQl56fA4UGoAzM7fm8qLq8qUZPCtl.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <StyledButton icon={Send} onClick={() => window.open("https://t.me/EvoTrackAI_bot", "_blank")}>
                  Telegram Bot
                </StyledButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <h2
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-center text-primary"
              style={{
                WebkitTextStroke: "1px #f97316",
                textShadow: "0 2px 4px rgba(0,0,0,0.1), 0 0 20px rgba(249, 115, 22, 0.3)",
              }}
            >
              Coming Soon
            </h2>
          </motion.div>
        </section>

        {/* Premium Features Section */}
        <PremiumFeaturesSection />

        {/* Features Section */}
        <section id="features" className="py-20 relative" ref={featuresRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <h2 className="text-4xl font-bold text-primary text-center mb-12 font-display animate-gradient-x">
              Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-card/20 backdrop-blur-md rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 ease-in-out shadow-lg shadow-primary/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                    className="mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl text-foreground mb-2">{feature.title}</h3>
                  <p className="text-primary/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer onScrollToTerminal={scrollToTerminal} onScrollToVideo={scrollToVideo} />
    </motion.div>
  )
}

function NavButton({
  children,
  icon,
  href,
  onClick,
}: {
  children: React.ReactNode
  icon: React.ReactNode
  href?: string
  onClick?: () => void
}) {
  const buttonContent = (
    <>
      {icon}
      <span>{children}</span>
    </>
  )

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-full"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      />
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-3 py-1.5 text-sm font-medium text-primary bg-transparent hover:text-white transition-colors duration-300 flex items-center gap-1.5 rounded-full"
        >
          {buttonContent}
        </a>
      ) : (
        <button
          onClick={onClick}
          className="relative px-3 py-1.5 text-sm font-medium text-primary bg-transparent hover:text-white transition-colors duration-300 flex items-center gap-1.5 rounded-full"
        >
          {buttonContent}
        </button>
      )}
    </motion.div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl font-bold text-primary text-center mb-12 font-display animate-gradient-x">{children}</h2>
  )
}

