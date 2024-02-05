import Image from "next/image"
import Link from "next/link"
import NavSection from "./NavSection"
import MobileNav from "./MobileNav"

const NavigationBar = () => {
  return (
    <div className="align-center flex items-center justify-between px-16">
      <div>
        <Link href="/">
          <Image
            src="/img/skinny-engine.webp"
            alt="Skinny's Engine Logo"
            width={120}
            height={120}
          />
        </Link>
      </div>
      <NavSection />
      <MobileNav />
    </div>
  )
}

export default NavigationBar
