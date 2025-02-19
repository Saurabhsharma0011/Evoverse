import dynamic from "next/dynamic"
import { Suspense } from "react"

const HomeContent = dynamic(() => import("@/components/home-content"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
})

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
}

