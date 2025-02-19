"use client"

import React from "react"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Bot } from "lucide-react"

interface StyledButtonProps {
  children: React.ReactNode
  icon?: LucideIcon | React.ReactElement
  onClick?: () => void
  className?: string
  disabled?: boolean
}

export function StyledButton({
  children,
  icon: Icon = Bot,
  onClick,
  className = "",
  disabled = false,
}: StyledButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`group relative px-6 py-2 bg-black/20 border border-primary rounded-full overflow-hidden ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      disabled={disabled}
    >
      <div className="absolute inset-0 bg-primary/10 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100" />
      <span className="relative flex items-center justify-center gap-2 text-primary group-hover:text-white transition-colors">
        {React.isValidElement(Icon) ? Icon : <Icon className="w-5 h-5" />}
        {children}
      </span>
    </motion.button>
  )
}

