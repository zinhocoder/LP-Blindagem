import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Blindagem Contra Amantes - Proteja Seu Casamento",
  description:
    "Método estratégico para proteger seu relacionamento contra influências externas e reconectar com seu marido.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-roboto antialiased">{children}</body>
    </html>
  )
}
