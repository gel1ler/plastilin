import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="ru">
        <head>
          <link rel='image/svg+xml' href='https://plastilin-deti.ru/favicon.ico' />
          <link rel="apple-touch-icon" href="https://plastilin-deti.ru/favicon.ico" />
          <link rel="icon" href="https://plastilin-deti.ru/logo/small-logo.svg" type="image/svg+xml" />
        </head>
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
