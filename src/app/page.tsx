'use client'

import MugenHero from "./components/MugenHero"
import MugenNav from "./components/MugenNav"
import MugenBottomBar from "./components/MugenBottomBar"
import MenuDrawer from "./components/MenuDrawer"
import { MenuProvider, useMenu } from "./context/MenuContext"

function HomeContent() {
  const { isMenuOpen, setIsMenuOpen } = useMenu()
  
  return (
    <div className="h-screen overflow-hidden bg-black">
      {!isMenuOpen && <MugenNav />}
      <MugenHero />
      {!isMenuOpen && <MugenBottomBar />}
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  )
}

export default function Home() {
  return (
    <MenuProvider>
      <HomeContent />
    </MenuProvider>
  )
}
