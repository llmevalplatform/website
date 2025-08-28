import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://phinity.ai'),
  title: "Phinity Labs | AI Agent Testing & Reliability Platform",
  description: "Phinity Labs helps companies build reliable AI agents by automatically testing changes against real user scenarios. Ship faster with confidence.",
  keywords: "AI testing, LLM testing, agent reliability, AI deployment, prompt testing, AI monitoring, AI quality assurance",
  openGraph: {
    title: "Phinity Labs | AI Agent Testing & Reliability Platform",
    description: "Ship AI agents faster with confidence. Automatically test changes against real user scenarios.",
    url: "https://phinity.ai",
    siteName: "Phinity Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phinity Labs | AI Agent Testing & Reliability Platform",
    description: "Ship AI agents faster with confidence. Automatically test changes against real user scenarios.",
  },
  alternates: {
    canonical: "https://phinity.ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "ODOTZvHQlpgdxWemlxU_zY4Y35dKYOyD7r2iRXeaogg",
  },
  category: "technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}