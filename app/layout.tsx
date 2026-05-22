import './globals.css';

export const metadata = {
  title: 'Alpha 1 Energy Group - Free Electric & Gas Bill Review',
  description: 'Free energy bill review for businesses and commercial properties.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}