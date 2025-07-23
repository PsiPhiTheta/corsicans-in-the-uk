import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Corsicans in the UK",
  description: "Free, open and inclusive association for Corsicans living in the UK",
  icons: {
    icon: "/images/lock-screen.png",
    shortcut: "/images/lock-screen.png",
    apple: "/images/lock-screen.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/lock-screen.png" />
        <link rel="shortcut icon" href="/images/lock-screen.png" />
        <link rel="apple-touch-icon" href="/images/lock-screen.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
