import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/evo_new_logo_orng-removebg-preview-lrzg4pUuPGkUKZRaVCLj3qkOv2F8t9.png"
      alt="EvoVerse AI Logo"
      width={100}
      height={100}
      className={className}
    />
  )
}

