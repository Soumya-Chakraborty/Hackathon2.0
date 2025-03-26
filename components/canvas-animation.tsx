"use client"

import { useEffect, useRef, useState } from "react"

interface Character {
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
}

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  life: number
  maxLife: number
}

export default function CanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
  const charactersRef = useRef<Character[]>([])
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)

  // Initialize canvas dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  // Initialize characters
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const colors = ["#FF5757", "#47B8FF", "#FFD029", "#7ED957", "#9747FF"]
    const characters: Character[] = []

    for (let i = 0; i < 5; i++) {
      characters.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: 30 + Math.random() * 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
      })
    }

    charactersRef.current = characters
  }, [dimensions])

  // Handle mouse events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return

      const rect = canvasRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => setIsMouseInCanvas(true)
    const handleMouseLeave = () => setIsMouseInCanvas(false)

    const canvas = canvasRef.current
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove)
      canvas.addEventListener("mouseenter", handleMouseEnter)
      canvas.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseenter", handleMouseEnter)
        canvas.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    const createParticle = () => {
      if (isMouseInCanvas && Math.random() > 0.7) {
        const colors = ["#FF5757", "#47B8FF", "#FFD029", "#7ED957", "#9747FF"]
        for (let i = 0; i < 3; i++) {
          particlesRef.current.push({
            x: mousePosition.x,
            y: mousePosition.y,
            size: 2 + Math.random() * 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: (Math.random() - 0.5) * 3,
            speedY: (Math.random() - 0.5) * 3,
            life: 0,
            maxLife: 50 + Math.random() * 50,
          })
        }
      }
    }

    const drawCharacter = (char: Character) => {
      ctx.save()
      ctx.translate(char.x, char.y)
      ctx.rotate(char.rotation)

      // Body
      ctx.fillStyle = char.color
      ctx.beginPath()
      ctx.arc(0, 0, char.size / 2, 0, Math.PI * 2)
      ctx.fill()

      // Eyes
      ctx.fillStyle = "#FFFFFF"
      ctx.beginPath()
      ctx.arc(-char.size / 6, -char.size / 8, char.size / 8, 0, Math.PI * 2)
      ctx.arc(char.size / 6, -char.size / 8, char.size / 8, 0, Math.PI * 2)
      ctx.fill()

      // Pupils
      ctx.fillStyle = "#000000"
      ctx.beginPath()
      ctx.arc(-char.size / 6, -char.size / 8, char.size / 16, 0, Math.PI * 2)
      ctx.arc(char.size / 6, -char.size / 8, char.size / 16, 0, Math.PI * 2)
      ctx.fill()

      // Smile
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(0, char.size / 8, char.size / 4, 0, Math.PI)
      ctx.stroke()

      // Tech elements - antenna
      ctx.beginPath()
      ctx.moveTo(0, -char.size / 2)
      ctx.lineTo(0, -char.size / 2 - char.size / 3)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(0, -char.size / 2 - char.size / 3, char.size / 10, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()
    }

    const updateCharacters = () => {
      charactersRef.current.forEach((char) => {
        char.x += char.speedX
        char.y += char.speedY
        char.rotation += char.rotationSpeed

        // Bounce off walls
        if (char.x < char.size / 2) {
          char.x = char.size / 2
          char.speedX *= -1
        } else if (char.x > dimensions.width - char.size / 2) {
          char.x = dimensions.width - char.size / 2
          char.speedX *= -1
        }

        if (char.y < char.size / 2) {
          char.y = char.size / 2
          char.speedY *= -1
        } else if (char.y > dimensions.height - char.size / 2) {
          char.y = dimensions.height - char.size / 2
          char.speedY *= -1
        }
      })
    }

    const updateParticles = () => {
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.life++

        return particle.life < particle.maxLife
      })
    }

    const drawParticles = () => {
      particlesRef.current.forEach((particle) => {
        const opacity = 1 - particle.life / particle.maxLife
        ctx.fillStyle =
          particle.color +
          Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawTechSymbols = () => {
      // Draw code brackets and symbols across the canvas
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 2

      const time = Date.now() / 1000
      const symbols = ["{", "}", "<", ">", "/", "*", "#", "=", ";"]

      for (let i = 0; i < 20; i++) {
        const x = (Math.sin(time * 0.3 + i) * 0.5 + 0.5) * dimensions.width
        const y = (Math.cos(time * 0.2 + i) * 0.5 + 0.5) * dimensions.height
        const symbol = symbols[i % symbols.length]

        ctx.font = `${15 + Math.sin(time + i) * 5}px monospace`
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time * 0.5 + i) * 0.05})`
        ctx.fillText(symbol, x, y)
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height)
      gradient.addColorStop(0, "#1a1a2e")
      gradient.addColorStop(1, "#16213e")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      drawTechSymbols()
      createParticle()
      updateParticles()
      drawParticles()
      updateCharacters()

      charactersRef.current.forEach(drawCharacter)

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [dimensions, isMouseInCanvas, mousePosition])

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute bottom-4 left-4 bg-black/30 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
        Move your mouse to interact
      </div>
    </div>
  )
}

