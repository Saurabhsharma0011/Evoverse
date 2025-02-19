"use client"

import { motion } from "framer-motion"
import { Bot, Send } from "lucide-react"
import { StyledButton } from "@/components/styled-button"
import { Logo } from "@/components/logo"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={
              isHovered
                ? {
                    scale: 1,
                    rotate: [0, 5, 0, -5, 0],
                  }
                : { scale: 1 }
            }
            transition={{
              duration: 10,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="mb-4 flex justify-center"
          >
            <Logo className="h-52 w-52 md:h-72 md:w-72 transition-transform duration-300" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-5 text-white relative tracking-tight mt-[-50px]"
          >
            EvoVerse{" "}
            <span className="text-primary relative inline-block">
              AI
              <motion.span
                className="absolute inset-0 bg-primary/20 blur-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-6 font-semibold text-primary"
          >
            AI-powered multi-chain intelligence & advanced market insights
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12"
          >
            Track tokens, get real-time price updates, detect whale moves, and stay ahead with AI-driven insights in the
            ever-evolving world of Web3.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center relative"
          >
            <StyledButton
              icon={<Bot className="w-5 h-5" />}
              onClick={() => window.open("https://evotradeai.app", "_blank")}
              className="w-full sm:w-auto text-lg py-3 px-8 relative group"
            >
              Launch App
              <motion.div
                className="absolute inset-0 -z-10 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors"
                animate={{
                  scale: [0.85, 1, 0.85],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </StyledButton>
            <StyledButton
              icon={<Send className="w-5 h-5" />}
              onClick={() => window.open("https://t.me/EvoTrackAI_bot", "_blank")}
              className="w-full sm:w-auto text-lg py-3 px-8 relative group"
            >
              Telegram Bot
              <motion.div
                className="absolute inset-0 -z-10 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors"
                animate={{
                  scale: [0.85, 1, 0.85],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </StyledButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="w-6 h-10 border-2 border-primary rounded-full p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}

