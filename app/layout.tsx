import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CommCove - Stop Hunting, Start Deciding',
  description: 'Your daily digest from Slack, Gmail, and GroupMe—all in one place. AI-powered communication intelligence for college students and young professionals.',
  openGraph: {
    title: 'CommCove - Stop Hunting, Start Deciding',
    description: 'Unified daily digests across Slack, Gmail, and GroupMe with AI-powered actions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
