import '@styles/globals.css'

import Navbar from '@components/Navbar';

export const metadata = {
  title: 'User List',
  description: 'Sample list of users',
  manifest: '/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/assets/manifest.json" />
      </head>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
