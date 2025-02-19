"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AIAnalysisSection() {
  const tweets = [
    {
      heading: "AI Detected  Activity",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tweet%20png%201-CioWjCcHwjoOpo3i3ipi4RNRWalr1S.png",
      link: "https://x.com/EvoVerseAI/status/1891520304356200622",
    },
    {
      heading: "AI Trading Strategy",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tweet%20png%205-Tn3HLkA1nKmrGuX3UpixEjuYcvCePh.png",
      link: "https://x.com/EvoVerseAI/status/1891477768845545948",
    },
    {
      heading: "Top 5 Solana Token Update",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tweet%20png%203-jxeJh7NO9RaMeLJDvlcajFOduqwgQq.png",
      link: "https://x.com/EvoVerseAI/status/1891511984480195016",
    },
    {
      heading: "AI Analysis",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tweet%20png%202-epF3SC5gWQFEkxHbmA5b6ion58IgQ5.png",
      link: "https://x.com/EvoVerseAI/status/1891554528782320047",
    },
    {
      heading: "Multi-Chain AI Analysis",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tweet%20png%204-NcIujJnNyu3DtUirxedoTiQunUAefi.png",
      link: "https://x.com/EvoVerseAI/status/1891499478928044281",
    },
    {
      heading: "Top Gainers of 100",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tweet%20png%206-3Tg5Lf43980hobiOwpvIs1sd2R70Db.png",
      link: "https://x.com/EvoVerseAI/status/1891626552393105477",
    },
  ]

  return (
    <section className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-[2.5rem] font-bold text-primary text-center mb-12 font-display">
          AI POWERED MULTI-CHAIN INTELLIGENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tweets.map((tweet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary">{tweet.heading}</h3>
              </div>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  },
                }}
                className="relative group cursor-pointer bg-black/20 rounded-xl overflow-hidden transform-gpu border-2 border-primary/20 hover:border-primary/40"
                onClick={() => window.open(tweet.link, "_blank")}
              >
                <Image
                  src={tweet.image || "/placeholder.svg"}
                  alt={`EvoVerse AI - ${tweet.heading}`}
                  width={600}
                  height={200}
                  className="w-full transition-all duration-300 group-hover:brightness-110"
                  priority={index < 2}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

