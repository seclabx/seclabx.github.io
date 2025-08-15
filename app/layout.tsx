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
  metadataBase: new URL("https://xpertino.io"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "XPERTINO - Precision Engineering for Secure & Scalable Systems",
    description:
      "Cairo-based consulting firm delivering expert solutions in Embedded Systems, Security, and Blockchain.",
    url: "https://xpertino.io",
    siteName: "XPERTINO",
    type: "website",
    images: [
      {
        url: "/images/xpertino-logo.png",
        width: 1200,
        height: 630,
        alt: "XPERTINO Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XPERTINO - Precision Engineering for Secure & Scalable Systems",
    description:
      "Cairo-based consulting firm delivering expert solutions in Embedded Systems, Security, and Blockchain.",
    images: ["/images/xpertino-logo.png"],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "XPERTINO",
              url: "https://xpertino.io",
              logo: "https://xpertino.io/images/xpertino-logo.png",
              description:
                "Cairo-based consulting firm delivering expert solutions in Embedded Systems, Security, and Blockchain.",
              email: "info@expertino.io",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cairo",
                addressCountry: "Egypt",
              },
              areaServed: "Worldwide",
              foundingLocation: {
                "@type": "Place",
                name: "Cairo, Egypt",
              },
              knowsAbout: [
                "Embedded Systems",
                "Blockchain Technology",
                "Cryptocurrency",
                "Security Engineering",
                "System Architecture",
                "Technical Advisory",
              ],
              serviceType: [
                "Embedded Systems Development",
                "Blockchain & Crypto Solutions",
                "Security Engineering",
                "Architecture Reviews",
                "Technical Advisory",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
