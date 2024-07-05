import { Metadata } from "next"
import Navigation from "../components/navigation"
import "../css/global.css"

export const metadata :Metadata = {
  title: {
    template: 'Next Movies > %s',
    default: 'Loading...'
  },
  description: 'The best movies on the best framework'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
