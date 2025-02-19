"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function SpinningLogo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60, // Very slow rotation - takes 60 seconds for one full rotation
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="w-96 h-96" // Much larger size - 384x384 pixels
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evo_new_logo_orng-removebg-preview-1YZk4LeWLcfzsqYR4KNAgTRcLRYlvU.png"
          alt="EvoVerse AI Logo"
          width={384}
          height={384}
          className="w-full h-full"
        />
      </motion.div>
    </div>
  )
}

