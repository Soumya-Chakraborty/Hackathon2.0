import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal | Kolkata Hackfest",
  description: "Legal information and policies for Kolkata Hackfest",
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 