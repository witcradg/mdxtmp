import "./globals.css"
import { Inter, Manrope } from "next/font/google"
import { cx } from "@/lib/utils"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light text-dark"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
