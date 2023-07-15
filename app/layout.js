import '@styles/globals.css'

import Navbar from '@components/Navbar';

export const metadata = {
  title: 'User List',
  description: 'Sample list of users',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
