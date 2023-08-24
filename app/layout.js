import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Пластилин - детский центр в Раменском</title>
        <meta name='description' content='Детский центр Пластилин' />
        <link rel='icon' href='/logo/favicon.ico' />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
