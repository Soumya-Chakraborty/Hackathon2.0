"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  connections: number[]
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.x
      mouseRef.current.y = e.y
    }

    const initParticles = () => {
      particlesRef.current = []
      const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 100)

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 5 + 1
        const x = Math.random() * (canvas.width - size * 2 - size * 2) + size * 2
        const y = Math.random() * (canvas.height - size * 2 - size * 2) + size * 2
        const speedX = Math.random() * 1 - 0.5
        const speedY = Math.random() * 1 - 0.5
        const color = `rgb(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)})`

        particlesRef.current.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color,
          alpha: 0.5,
          connections: [],
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i]

        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x > canvas.width - particle.size || particle.x < particle.size) {
          particle.speedX = -particle.speedX
        }
        if (particle.y > canvas.height - particle.size || particle.y < particle.size) {
          particle.speedY = -particle.speedY
        }

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRef.current.radius) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius

          particle.x -= forceDirectionX * force * 2
          particle.y -= forceDirectionY * force * 2
        }

        // Reset connections
        particle.connections = []
      }

      // Find connections between particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            particlesRef.current[i].connections.push(j)
            particlesRef.current[j].connections.push(i)
          }
        }
      }

      // Draw connections
      ctx.lineWidth = 0.5
      for (let i = 0; i < particlesRef.current.length; i++) {
        const particle = particlesRef.current[i]

        for (const j of particle.connections) {
          const connectedParticle = particlesRef.current[j]
          const dx = particle.x - connectedParticle.x
          const dy = particle.y - connectedParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Fade out as distance increases
          const opacity = 1 - distance / 150
          ctx.strokeStyle = `rgba(150, 150, 255, ${opacity * 0.5})`

          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(connectedParticle.x, connectedParticle.y)
          ctx.stroke()
        }
      }

      // Draw particles
      for (const particle of particlesRef.current) {
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    handleResize()
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ background: "linear-gradient(to bottom, #000000, #0f0f2d)" }}
    />
  )
}

