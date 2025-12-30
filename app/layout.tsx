import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ThreadByte',
  description: 'Unified daily digest application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
