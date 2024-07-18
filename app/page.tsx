import Image from "next/image";
import { league_script, marcellus_sc, lusitana } from "./ui/fonts";

export const usedText = {
  'restaurantName': 'Claude  Monet',
  'slogan':'Timeless elegance & exquisite flavours',
  'subslogan':'dining with distinction since 1989',
}
export default function Home() {
  return (
    <main>
      <Header></Header>
      <WelcomeAndBook></WelcomeAndBook>
      <Menu></Menu>
    </main>
  )
}

function Header() {
  return (
    <header className="w-full flex justify-center p-4 bg-none fixed whitespace-pre">
      <div><h1 className={`${league_script.className} text-4xl`}>{usedText.restaurantName}</h1></div>
    </header>
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
      <div className="text-center row-start-3">
        <h1 className={`${marcellus_sc.className} text-5xl`}>{usedText.slogan}</h1>
        <h2 className={`${lusitana.className} text-4xl mt-1`}>{usedText.subslogan}</h2>
      </div>
      
      <a className={`${lusitana.className} outline outline-2 outline-slate-100 bg-none w-36 h-8 row-start-5 text-center content-center`}>book a table</a>
  </div>

  )
}

function Menu() {
  const dishes = [{
    'name' : 'Duck',
    'desc' : 'Yummy yummy',
    'price' : '$10.00',
    'image' : 'img'
  }, {'name' : 'Chicken', 'desc' : 'Finger lickin good', 'price' : '$6.00'}]

  const dishesCards = new Array()

  for(let dish of dishes){
    dishesCards.push(<DishCard name={dish.name} desc={dish.desc} price={dish.price}></DishCard>)
  }

  return (
    <div className={`${marcellus_sc.className} bg-zinc-300`}>

      <div className="text-center p-3"><h1 className="text-5xl text-black">Menu</h1></div>
      <div className={` mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8`}>
        
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
          dishesCards.map((dishCard, index) => (
            <div key={index}>
              {dishCard}
            </div>
          ))
        }
        </div>
      </div>
    </div>

  )
}

function DishCard({name, desc, price} : {name : string, desc : string, price : string}){
  return (
    
      <div className={`${lusitana.className} group relative`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{desc}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
      </div>

  )
}