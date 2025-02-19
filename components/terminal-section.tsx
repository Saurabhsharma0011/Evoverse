"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Terminal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StyledButton } from "@/components/styled-button"

export default function TerminalSection() {
  const [messages, setMessages] = useState<{ type: "user" | "ai"; content: string }[]>([])
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 3000) // Hide notification after 3 seconds

      return () => clearTimeout(timer)
    }
  }, [showNotification])

  const handleInputClick = () => {
    setShowNotification(true)
  }

  return (
    <section className="py-20 relative bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[2.5rem] font-bold text-primary text-center mb-2 font-display"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            WebkitTextStroke: "1px #f97316",
            textShadow: "0 0 10px rgba(249, 115, 22, 0.3)",
          }}
        >
          YOUR PERSONAL AI TERMINAL ASSISTANT
        </motion.h2>
        <h3 className="text-4xl text-center mb-12 font-extrabold">
          <span className="text-white">
            EvoTrade <span className="text-primary">AI</span>
          </span>
        </h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="bg-black border border-primary/20 rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
            {/* Terminal Header */}
            <div className="bg-black/20 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-primary font-mono text-sm">EvoTrade AI Terminal</span>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <X className="h-4 w-4 text-primary" />
                </Button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="h-[400px] overflow-y-auto p-4 font-mono text-sm">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`mb-2 ${message.type === "user" ? "text-primary" : "text-primary/70"}`}
                  >
                    <span className="font-bold">{message.type === "user" ? ">" : "AI:"}</span> {message.content}
                  </motion.div>
                ))}
              </AnimatePresence>
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-primary/50 text-center mt-20"
                >
                  Type a command to start interacting with EvoTrade AI...
                </motion.div>
              )}
            </div>

            {/* Terminal Input */}
            <div className="border-t border-primary/20 p-4">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={handleInputClick}>
                <span className="text-primary font-bold">{`>`}</span>
                <div className="flex-grow bg-transparent border-none text-primary/50 focus:ring-0">
                  Click here to enter command...
                </div>
              </div>
            </div>
          </div>

          {/* Visit Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center"
          >
            <StyledButton icon={Bot} onClick={() => window.open("https://evotradeai.app", "_blank")}>
              Visit EvoTrade AI
            </StyledButton>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 bg-primary text-black px-4 py-2 rounded-lg shadow-lg z-50"
          >
            <p className="text-sm font-semibold">Visit the terminal website to use your own personal assistant</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

