"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  connections: number[]
}

interface Character {
  x: number
  y: number
  size: number
  type: "rocket" | "astronaut" | "robot" | "satellite"
  rotation: number
  rotationSpeed: number
  speedX: number
  speedY: number
  color: string
  orbitRadius?: number
  orbitSpeed?: number
  orbitAngle?: number
}

export default function CosmicHackathonAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const charactersRef = useRef<Character[]>([])
  const animationFrameRef = useRef<number>(0)
  const lastUpdateTimeRef = useRef<number>(0)

  // Initialize canvas dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect()
        setDimensions({ width, height })
        canvasRef.current.width = width * window.devicePixelRatio
        canvasRef.current.height = height * window.devicePixelRatio
        canvasRef.current.style.width = `${width}px`
        canvasRef.current.style.height = `${height}px`

        // Reinitialize particles when dimensions change
        initializeParticles(width, height)
        initializeCharacters(width, height)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  // Initialize particles
  const initializeParticles = (width: number, height: number) => {
    const particleCount = Math.min(Math.floor((width * height) / 10000), 100)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 2 + Math.random() * 3,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        color: `rgba(255, 255, 255, ${0.3 + Math.random() * 0.7})`,
        connections: [],
      })
    }

    particlesRef.current = particles
  }

  // Initialize characters
  const initializeCharacters = (width: number, height: number) => {
    const characterTypes: ("rocket" | "astronaut" | "robot" | "satellite")[] = [
      "rocket",
      "astronaut",
      "robot",
      "satellite",
    ]
    const colors = ["#FF5757", "#47B8FF", "#FFD029", "#7ED957", "#9747FF"]
    const characters: Character[] = []

    // Create some floating characters
    for (let i = 0; i < 5; i++) {
      characters.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 30 + Math.random() * 20,
        type: characterTypes[Math.floor(Math.random() * characterTypes.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    // Create some orbiting characters
    for (let i = 0; i < 3; i++) {
      characters.push({
        x: width / 2,
        y: height / 2,
        size: 20 + Math.random() * 15,
        type: characterTypes[Math.floor(Math.random() * characterTypes.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        speedX: 0,
        speedY: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        orbitRadius: 100 + Math.random() * 150,
        orbitSpeed: 0.0005 + Math.random() * 0.001,
        orbitAngle: Math.random() * Math.PI * 2,
      })
    }

    charactersRef.current = characters
  }

  // Handle mouse events
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return

      const rect = canvasRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) * window.devicePixelRatio
      const y = (e.clientY - rect.top) * window.devicePixelRatio

      setMousePosition({ x, y })
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

    // Draw functions for different character types
    const drawCharacter = (char: Character, ctx: CanvasRenderingContext2D) => {
      ctx.save()
      ctx.translate(char.x, char.y)
      ctx.rotate(char.rotation)

      switch (char.type) {
        case "rocket":
          drawRocket(ctx, char)
          break
        case "astronaut":
          drawAstronaut(ctx, char)
          break
        case "robot":
          drawRobot(ctx, char)
          break
        case "satellite":
          drawSatellite(ctx, char)
          break
      }

      ctx.restore()
    }

    const drawRocket = (ctx: CanvasRenderingContext2D, char: Character) => {
      const { size, color } = char

      // Rocket body
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(0, -size / 2)
      ctx.lineTo(size / 4, size / 4)
      ctx.lineTo(-size / 4, size / 4)
      ctx.closePath()
      ctx.fill()

      // Rocket window
      ctx.fillStyle = "#FFFFFF"
      ctx.beginPath()
      ctx.arc(0, -size / 6, size / 8, 0, Math.PI * 2)
      ctx.fill()

      // Rocket fins
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(size / 4, size / 4)
      ctx.lineTo(size / 2, size / 2)
      ctx.lineTo(size / 4, size / 2)
      ctx.closePath()
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(-size / 4, size / 4)
      ctx.lineTo(-size / 2, size / 2)
      ctx.lineTo(-size / 4, size / 2)
      ctx.closePath()
      ctx.fill()

      // Rocket flames (animated)
      const time = Date.now() / 100
      const flameSize = 0.7 + Math.sin(time) * 0.3

      ctx.fillStyle = "#FF9D00"
      ctx.beginPath()
      ctx.moveTo(size / 8, size / 4)
      ctx.lineTo(0, size / 2 + (size / 4) * flameSize)
      ctx.lineTo(-size / 8, size / 4)
      ctx.closePath()
      ctx.fill()
    }

    const drawAstronaut = (ctx: CanvasRenderingContext2D, char: Character) => {
      const { size, color } = char

      // Helmet
      ctx.fillStyle = "#FFFFFF"
      ctx.beginPath()
      ctx.arc(0, -size / 8, size / 3, 0, Math.PI * 2)
      ctx.fill()

      // Face inside helmet
      ctx.fillStyle = "#FFE0C2"
      ctx.beginPath()
      ctx.arc(0, -size / 8, size / 4, 0, Math.PI * 2)
      ctx.fill()

      // Eyes
      ctx.fillStyle = "#000000"
      ctx.beginPath()
      ctx.arc(-size / 10, -size / 8, size / 20, 0, Math.PI * 2)
      ctx.arc(size / 10, -size / 8, size / 20, 0, Math.PI * 2)
      ctx.fill()

      // Smile
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = size / 30
      ctx.beginPath()
      ctx.arc(0, -size / 10, size / 10, 0.1 * Math.PI, 0.9 * Math.PI)
      ctx.stroke()

      // Body
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.roundRect(-size / 4, size / 8, size / 2, size / 2, size / 10)
      ctx.fill()

      // Arms
      ctx.lineWidth = size / 10
      ctx.strokeStyle = color
      ctx.beginPath()
      ctx.moveTo(-size / 4, size / 6)
      ctx.lineTo(-size / 2, size / 3)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(size / 4, size / 6)
      ctx.lineTo(size / 2, size / 3)
      ctx.stroke()

      // Legs
      ctx.beginPath()
      ctx.moveTo(-size / 8, size / 2 + size / 8)
      ctx.lineTo(-size / 6, size / 2 + size / 3)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(size / 8, size / 2 + size / 8)
      ctx.lineTo(size / 6, size / 2 + size / 3)
      ctx.stroke()
    }

    const drawRobot = (ctx: CanvasRenderingContext2D, char: Character) => {
      const { size, color } = char

      // Head
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.roundRect(-size / 4, -size / 2, size / 2, size / 3, size / 20)
      ctx.fill()

      // Eyes
      ctx.fillStyle = "#FFFFFF"
      ctx.beginPath()
      ctx.arc(-size / 8, -size / 2 + size / 6, size / 15, 0, Math.PI * 2)
      ctx.arc(size / 8, -size / 2 + size / 6, size / 15, 0, Math.PI * 2)
      ctx.fill()

      // Antenna
      ctx.strokeStyle = "#888888"
      ctx.lineWidth = size / 40
      ctx.beginPath()
      ctx.moveTo(0, -size / 2)
      ctx.lineTo(0, -size / 2 - size / 6)
      ctx.stroke()

      ctx.fillStyle = "#FF0000"
      ctx.beginPath()
      ctx.arc(0, -size / 2 - size / 6, size / 20, 0, Math.PI * 2)
      ctx.fill()

      // Body
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.roundRect(-size / 3, -size / 6, size / 1.5, size / 2, size / 20)
      ctx.fill()

      // Control panel
      ctx.fillStyle = "#333333"
      ctx.beginPath()
      ctx.roundRect(-size / 5, -size / 10, size / 2.5, size / 6, size / 30)
      ctx.fill()

      // Buttons
      const time = Date.now() / 500
      const buttonColors = ["#FF0000", "#00FF00", "#0000FF"]

      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = buttonColors[i % 3]
        if (Math.sin(time + i) > 0.7) {
          ctx.fillStyle = "#FFFFFF"
        }
        ctx.beginPath()
        ctx.arc(-size / 10 + (i * size) / 10, -size / 15, size / 30, 0, Math.PI * 2)
        ctx.fill()
      }

      // Arms
      ctx.strokeStyle = "#888888"
      ctx.lineWidth = size / 20
      ctx.beginPath()
      ctx.moveTo(-size / 3, 0)
      ctx.lineTo(-size / 2, size / 6)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(size / 3, 0)
      ctx.lineTo(size / 2, size / 6)
      ctx.stroke()

      // Legs
      ctx.fillStyle = "#888888"
      ctx.beginPath()
      ctx.roundRect(-size / 4, size / 3, size / 6, size / 4, size / 30)
      ctx.roundRect(size / 10, size / 3, size / 6, size / 4, size / 30)
      ctx.fill()
    }

    const drawSatellite = (ctx: CanvasRenderingContext2D, char: Character) => {
      const { size, color } = char

      // Main body
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.roundRect(-size / 6, -size / 6, size / 3, size / 3, size / 20)
      ctx.fill()

      // Solar panels
      ctx.fillStyle = "#1E88E5"
      ctx.beginPath()
      ctx.rect(-size / 2, -size / 10, size / 3, size / 5)
      ctx.rect(size / 6, -size / 10, size / 3, size / 5)
      ctx.fill()

      // Panel lines
      ctx.strokeStyle = "#0D47A1"
      ctx.lineWidth = 1

      for (let i = 1; i < 3; i++) {
        ctx.beginPath()
        ctx.moveTo(-size / 2 + (i * size) / 9, -size / 10)
        ctx.lineTo(-size / 2 + (i * size) / 9, -size / 10 + size / 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(size / 6 + (i * size) / 9, -size / 10)
        ctx.lineTo(size / 6 + (i * size) / 9, -size / 10 + size / 5)
        ctx.stroke()
      }

      // Antenna
      ctx.strokeStyle = "#888888"
      ctx.lineWidth = size / 40
      ctx.beginPath()
      ctx.moveTo(0, -size / 6)
      ctx.lineTo(0, -size / 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(0, -size / 2, size / 20, 0, Math.PI * 2)
      ctx.stroke()

      // Dish
      ctx.beginPath()
      ctx.arc(0, size / 6, size / 8, 0, Math.PI, true)
      ctx.stroke()
    }

    const updateParticles = (deltaTime: number) => {
      const particles = particlesRef.current
      const width = dimensions.width
      const height = dimensions.height

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX * deltaTime * 0.05
        particle.y += particle.speedY * deltaTime * 0.05

        // Bounce off edges
        if (particle.x < 0 || particle.x > width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > height) {
          particle.speedY *= -1
        }

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(width, particle.x))
        particle.y = Math.max(0, Math.min(height, particle.y))

        // Mouse interaction
        if (isMouseInCanvas) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150 * window.devicePixelRatio

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 0.2
            particle.speedX += (dx / distance) * force
            particle.speedY += (dy / distance) * force

            // Limit speed
            const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
            if (speed > 3) {
              particle.speedX = (particle.speedX / speed) * 3
              particle.speedY = (particle.speedY / speed) * 3
            }
          }
        }

        // Reset connections
        particle.connections = []
      })

      // Find connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150 * window.devicePixelRatio

          if (distance < maxDistance) {
            particles[i].connections.push(j)
            particles[j].connections.push(i)
          }
        }
      }
    }

    const updateCharacters = (deltaTime: number) => {
      const characters = charactersRef.current
      const width = dimensions.width
      const height = dimensions.height

      characters.forEach((char) => {
        // Update rotation
        char.rotation += char.rotationSpeed * deltaTime * 0.05

        if (char.orbitRadius) {
          // Update orbit position
          if (char.orbitAngle !== undefined && char.orbitSpeed) {
            char.orbitAngle += char.orbitSpeed * deltaTime
            char.x = width / 2 + Math.cos(char.orbitAngle) * char.orbitRadius
            char.y = height / 2 + Math.sin(char.orbitAngle) * char.orbitRadius
          }
        } else {
          // Update position
          char.x += char.speedX * deltaTime * 0.05
          char.y += char.speedY * deltaTime * 0.05

          // Bounce off edges
          if (char.x < char.size / 2 || char.x > width - char.size / 2) {
            char.speedX *= -1
            char.x = Math.max(char.size / 2, Math.min(width - char.size / 2, char.x))
          }

          if (char.y < char.size / 2 || char.y > height - char.size / 2) {
            char.speedY *= -1
            char.y = Math.max(char.size / 2, Math.min(height - char.size / 2, char.y))
          }
        }
      })
    }

    const drawStars = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() / 1000
      const width = dimensions.width
      const height = dimensions.height

      // Draw some twinkling stars
      for (let i = 0; i < 50; i++) {
        const x = (Math.sin(i * 0.3) * 0.5 + 0.5) * width
        const y = (Math.cos(i * 0.4) * 0.5 + 0.5) * height
        const size = 1 + Math.sin(time + i) * 1
        const opacity = 0.3 + Math.sin(time * 0.5 + i) * 0.2

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const drawConnections = (ctx: CanvasRenderingContext2D) => {
      const particles = particlesRef.current

      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.lineWidth = 1

      particles.forEach((particle, i) => {
        particle.connections.forEach((j) => {
          if (i < j) {
            // Only draw each connection once
            const otherParticle = particles[j]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const maxDistance = 150 * window.devicePixelRatio

            // Fade out as distance increases
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`

            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })
    }

    const drawParticles = (ctx: CanvasRenderingContext2D) => {
      const particles = particlesRef.current

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const drawCodeSymbols = (ctx: CanvasRenderingContext2D) => {
      const time = Date.now() / 1000
      const width = dimensions.width
      const height = dimensions.height
      const symbols = ["{", "}", "<>", "//", "[]", "&&", "||", "==", "=>", "++"]

      ctx.font = `${12 * window.devicePixelRatio}px monospace`

      for (let i = 0; i < 15; i++) {
        const x = (Math.sin(time * 0.2 + i * 0.5) * 0.5 + 0.5) * width
        const y = (Math.cos(time * 0.3 + i * 0.5) * 0.5 + 0.5) * height
        const symbol = symbols[i % symbols.length]
        const opacity = 0.1 + Math.sin(time * 0.2 + i) * 0.05

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fillText(symbol, x, y)
      }
    }

    const animate = (timestamp: number) => {
      // Calculate delta time
      if (!lastUpdateTimeRef.current) {
        lastUpdateTimeRef.current = timestamp
      }

      const deltaTime = timestamp - lastUpdateTimeRef.current
      lastUpdateTimeRef.current = timestamp

      // Clear canvas
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Draw background
      const gradient = ctx.createLinearGradient(0, 0, dimensions.width, dimensions.height)
      gradient.addColorStop(0, "#0F172A")
      gradient.addColorStop(1, "#1E293B")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      // Draw stars
      drawStars(ctx)

      // Draw code symbols
      drawCodeSymbols(ctx)

      // Update and draw particles
      updateParticles(deltaTime)
      drawConnections(ctx)
      drawParticles(ctx)

      // Update and draw characters
      updateCharacters(deltaTime)
      charactersRef.current.forEach((char) => drawCharacter(char, ctx))

      // Draw mouse interaction
      if (isMouseInCanvas) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(mousePosition.x, mousePosition.y, 100 * window.devicePixelRatio, 0, Math.PI * 2)
        ctx.stroke()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

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

