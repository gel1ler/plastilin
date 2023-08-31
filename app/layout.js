import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Пластилин - детский центр в Раменском</title>
        <link rel='image/svg+xml' href='https://plastilin-deti.ru/favicon.ico' />
        <link rel="apple-touch-icon" href="https://plastilin-deti.ru/favicon.ico" />
        <link rel="icon" href="https://plastilin-deti.ru/logo/small-logo.svg" type="image/svg+xml" />
        <meta
          name="description"
          content="Группы от 1 года и 2 месяцев. Развитие софт скилс. Опытные педагоги, которые знают, как работать с детьми нового поколения." />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
