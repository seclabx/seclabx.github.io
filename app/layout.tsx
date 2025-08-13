import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "XPERTINO - Precision Engineering for Secure & Scalable Systems",
  description: "Cairo-based consulting firm delivering expert solutions in Embedded Systems, Security, and Blockchain.",
  metadataBase: new URL("https://expertino.io"),
  openGraph: {
    title: "XPERTINO - Precision Engineering for Secure & Scalable Systems",
    description:
      "Cairo-based consulting firm delivering expert solutions in Embedded Systems, Security, and Blockchain.",
    url: "https://expertino.io",
    siteName: "XPERTINO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XPERTINO - Precision Engineering for Secure & Scalable Systems",
    description:
      "Cairo-based consulting firm delivering expert solutions in Embedded Systems, Security, and Blockchain.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
