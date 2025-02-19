"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Wallet, ChevronDown, ChevronUp, HelpCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

const blurredContentClass = "filter blur-md pointer-events-none select-none"

const faqData = [
  {
    question: "What does EvoGuard AI do?",
    answer: (
      <>
        <p>EvoGuard AI is an AI-powered security assistant for seamless verification & premium access. It:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Instantly verifies $EVO token holdings.</li>
          <li>Provides secure read-only authentication for wallet access.</li>
          <li>Grants premium access to EvoTrade AI & EvoTrack AI.</li>
        </ul>
      </>
    ),
  },
  {
    question: "How does EvoGuard AI work?",
    answer: (
      <ol className="list-decimal pl-5 mt-2 space-y-1">
        <li>Users connect their Solana wallet & TG account.</li>
        <li>EvoGuard AI scans holdings (read-only).</li>
        <li>If eligible, premium access is granted automatically.</li>
      </ol>
    ),
  },
  {
    question: "Is it safe to connect my wallet?",
    answer:
      "Yes, EvoGuard AI uses secure read-only authentication, ensuring your wallet remains safe and under your control.",
  },
  {
    question: "What premium access does it grant?",
    answer: "It grants premium access to EvoTrade AI & EvoTrack AI, providing advanced features and analytics.",
  },
]

const TIMER_KEY = "evoverse_timer"
const TIMER_DURATION = 24 * 60 * 60 // 24 hours in seconds

export function PremiumFeaturesSection() {
  const [showPopup, setShowPopup] = useState(false)
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [showFaq, setShowFaq] = useState(false)

  const handleButtonClick = () => {
    setShowPopup(true)
  }

  useEffect(() => {
    const savedEndTime = localStorage.getItem(TIMER_KEY)
    const now = Math.floor(Date.now() / 1000)

    if (savedEndTime) {
      const remainingTime = Number.parseInt(savedEndTime) - now
      if (remainingTime > 0) {
        setTimeLeft(remainingTime)
      } else {
        localStorage.removeItem(TIMER_KEY)
      }
    } else {
      const endTime = now + TIMER_DURATION
      localStorage.setItem(TIMER_KEY, endTime.toString())
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          localStorage.removeItem(TIMER_KEY)
          return 0
        }
        const newTime = prevTime - 1
        const currentTime = Math.floor(Date.now() / 1000)
        localStorage.setItem(TIMER_KEY, (currentTime + newTime).toString())
        return newTime
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <section className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="max-w-6xl mx-auto border-2 border-primary/20 rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm">
          {/* Header Section */}
          <div className="p-6 flex flex-wrap md:flex-nowrap justify-between items-center border-b border-primary/20">
            <h2 className="text-2xl font-bold whitespace-nowrap mb-4 md:mb-0">
              <span className="text-white">EvoGuard</span> <span className="text-primary">AI</span>{" "}
              <span className="text-white">- Secure Wallet Verification</span>
            </h2>
            <div></div>
          </div>

          {/* Main Content Section */}
          <div className="p-12 relative">
            {/* Blurred content */}
            <div className={`absolute inset-0 ${blurredContentClass}`}>
              {/* Coming Soon Section */}
              <div className="relative overflow-hidden rounded-xl mb-12 bg-black/40">
                <div className="relative z-20 p-16 flex flex-col justify-center items-center">
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="text-white">EvoGuard</span> <span className="text-primary">AI</span>
                  </h2>
                  <p className="text-primary text-2xl mb-6">We have set this timer as an estimated time.</p>
                </div>
              </div>
            </div>

            {/* Non-blurred content */}
            <div className="relative z-10">
              <p className="text-primary text-xl text-center mb-4">We have set this timer as an estimated time.</p>
              <div className="text-5xl font-bold text-white mt-4 text-center mb-8">{formatTime(timeLeft)}</div>

              {/* Buttons */}
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-lg border border-primary/20 bg-black/20 text-primary hover:bg-primary/10 transition-colors flex items-center gap-2 whitespace-nowrap"
                  onClick={handleButtonClick}
                >
                  <Send className="w-4 h-4" />
                  Connect Telegram
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-lg border border-primary/20 bg-black/20 text-primary hover:bg-primary/10 transition-colors flex items-center gap-2 whitespace-nowrap"
                  onClick={handleButtonClick}
                >
                  <Wallet className="w-4 h-4" />
                  Connect Wallet
                </motion.button>
              </div>

              {/* FAQ Toggle Button */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-lg border border-primary/20 bg-black/20 text-primary hover:bg-primary/10 transition-colors flex items-center gap-2"
                  onClick={() => setShowFaq(!showFaq)}
                >
                  <HelpCircle className="w-5 h-5" />
                  {showFaq ? "Hide FAQ" : "Show FAQ"}
                </motion.button>
              </div>

              {/* FAQ Section */}
              <AnimatePresence>
                {showFaq && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-8"
                  >
                    <div className="bg-black/40 rounded-xl p-6 border border-primary/20">
                      <h3 className="text-xl font-bold mb-6 text-primary">Frequently Asked Questions</h3>
                      {faqData.map((faq, index) => (
                        <div key={index} className="mb-4">
                          <button
                            className="flex justify-between items-center w-full text-left font-semibold text-primary hover:text-primary/80 transition-colors"
                            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          >
                            <span>{faq.question}</span>
                            {expandedFaq === index ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                          <AnimatePresence>
                            {expandedFaq === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 text-primary/60"
                              >
                                {faq.answer}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60]"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative overflow-hidden bg-black/90 p-8 rounded-2xl border border-primary/20 max-w-md w-full m-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gradient Background Effect */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: "radial-gradient(circle at top right, rgba(249, 115, 22, 0.15), transparent 50%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl font-bold"
                    style={{
                      background: "linear-gradient(to right, #f97316, #fb923c)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 30px rgba(249, 115, 22, 0.3)",
                    }}
                  >
                    Feature Coming Soon!
                  </motion.h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => setShowPopup(false)}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <p className="text-lg text-white/90 leading-relaxed tracking-wide">
                    EvoGuard AI is not live yet. After{" "}
                    <motion.span
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                      className="font-bold px-1"
                      style={{
                        background: "linear-gradient(to right, #f97316, #fb923c)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 15px rgba(249, 115, 22, 0.5)",
                      }}
                    >
                      $EVO
                    </motion.span>{" "}
                    launch we'll update our AI bot to verify your{" "}
                    <motion.span
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
                      className="font-bold px-1"
                      style={{
                        background: "linear-gradient(to right, #f97316, #fb923c)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 15px rgba(249, 115, 22, 0.5)",
                      }}
                    >
                      $EVO
                    </motion.span>{" "}
                    Holdings.
                  </p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block"
                  >
                    <span
                      className="text-lg font-medium px-4 py-2 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.2))",
                        border: "1px solid rgba(249, 115, 22, 0.2)",
                        boxShadow: "0 0 20px rgba(249, 115, 22, 0.1)",
                      }}
                    >
                      <span className="mr-2 opacity-80">⏳</span>
                      <span
                        style={{
                          background: "linear-gradient(to right, #f97316, #fb923c)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        ETA - 12-24 hours after launch
                      </span>
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom Gradient Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{
                  background: "linear-gradient(to right, transparent, #f97316, transparent)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

