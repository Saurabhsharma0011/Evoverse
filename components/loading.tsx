"use client"

import { motion } from "framer-motion"

const loadingVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export function Loading() {
  return (
    <motion.div
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="w-24 h-24 border-4 border-primary rounded-full border-t-transparent animate-spin"
      />
    </motion.div>
  )
}

