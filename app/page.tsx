'use client'

import Image from "next/image";
import { league_script, marcellus_sc, lusitana } from "./ui/fonts"

import Header from "./components/header"

const usedText = {
  'restaurantName': 'Claude  Monet',
  'slogan':'Timeless elegance & exquisite flavours',
  'subslogan':'dining with distinction since 1977',
}
export default function Home() {

  return (
      <>
          <Header textColor="white"></Header>
          <WelcomeAndBook></WelcomeAndBook>
          <Footer></Footer>
      </>
  )
}

function WelcomeAndBook() {
  return (
    <div className="h-screen w-full grid grid-rows-5 justify-items-center">
      <div className="absolute -z-10 w-full max-h-screen">
          <Image
              src="/images/restaurant.webp"
              width={0}
              height={0}
              sizes="100vw"
              alt="Welcome and Book"
              className="w-full h-screen brightness-75 blur-sm"
          />
      </div>
      <div className="text-center row-start-3 max-md:w-11/12">
        <h1 className={`${marcellus_sc.className} text-5xl lg:text-7xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]`}>{usedText.slogan}</h1>
        <h2 className={`${lusitana.className} text-4xl lg:text-6xl mt-3 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]`}>{usedText.subslogan}</h2>
      </div>
      
      <a href="/booking" className={`${lusitana.className} outline outline-2 outline-slate-100 bg-none w-36 h-8 row-start-5 text-center content-center`}>book a table</a>
  </div>

  )
}


function Footer(){
  return (
    <div className="w-full h-screen">
      
    </div>
  )
}