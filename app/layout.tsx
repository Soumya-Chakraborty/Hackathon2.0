import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import Script from "next/script"

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
})

// Load Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

// Load JetBrains Mono font
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Kolkata Hackfest 2025 - 12-Hour Coding Sprint",
  description: "Join us for an exciting 12-hour coding sprint in Kolkata. Build innovative projects, learn new technologies, and connect with fellow developers.",
  keywords: ["hackathon", "coding", "Kolkata", "programming", "web development", "innovation"],
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <Script id="reveal-animation" strategy="afterInteractive">
          {`
            function handleIntersection(entries, observer) {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('is-revealed');
                  observer.unobserve(entry.target);
                }
              });
            }
            
            if (typeof window !== 'undefined') {
              const observer = new IntersectionObserver(handleIntersection, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
              });
              
              function setupObserver() {
                document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                  observer.observe(el);
                });
              }
              
              if (document.readyState === 'complete') {
                setupObserver();
              } else {
                window.addEventListener('load', setupObserver);
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'