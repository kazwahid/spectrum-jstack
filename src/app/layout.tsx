import type { Metadata } from "next"
import { Providers } from "./components/providers"
import Preloader from "./components/Preloader"

import "./globals.css"

export const metadata: Metadata = {
  title: "Spectrum - JStack",
  description: "We live in an age of artificial capability and human confusion. Our community is built to deliver clarity.",
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.ico", sizes: "any" },
    { rel: "icon", url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    { rel: "icon", url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    { rel: "apple-touch-icon", url: "/favicon-192x192.png" }
  ],
  manifest: "/site.webmanifest",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased bg-black text-white h-screen overflow-hidden sm:overflow-hidden">
        <Providers>
          <Preloader />
          <main className="relative">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
