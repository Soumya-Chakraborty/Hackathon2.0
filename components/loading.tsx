interface LoadingProps {
  isLoaded: boolean
}

export default function Loading({ isLoaded }: LoadingProps) {
  if (isLoaded) return null

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="inline-block relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-500 border-t-transparent rounded-full animate-spin animate-pulse"></div>
          <div className="absolute top-2 left-2 w-16 h-16 border-4 border-pink-500 border-b-transparent rounded-full animate-spin-slow animate-float"></div>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 animate-pulse animate-shimmer">
          FLASH<span className="text-white">HACK</span>
        </h2>
      </div>
    </div>
  )
}

