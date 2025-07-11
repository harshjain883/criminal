import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ꜱᴧʜɪʟ - ᴧʙᴏᴜᴛ",
  description: "Creative tech lover building bots, websites, and Telegram tools",
  keywords: "developer, programmer, bot development, web design, telegram bots",
  authors: [{ name: "Sahil Verma" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
