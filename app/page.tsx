'use client'

import Image from "next/image";
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
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
      <div className="text-center row-start-3 max-md:w-11/12">
        <h1 className={`${marcellus_sc.className} text-5xl lg:text-7xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]`}>{usedText.slogan}</h1>
        <h2 className={`${lusitana.className} text-4xl lg:text-6xl mt-3 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]`}>{usedText.subslogan}</h2>
      </div>
      
      <a className={`${lusitana.className} outline outline-2 outline-slate-100 bg-none w-36 h-8 row-start-5 text-center content-center`}>book a table</a>
  </div>

  )
}

function Menu() {
  const sections = [
    {
      'name': 'Chinese Food',
      'dishes': 
        [
          {'name' : 'Beijing Duck', 
            'desc' : 'Experience the culinary delight of Beijing Duck, a traditional Chinese dish known for its thin, crispy skin and succulent meat. Our chefs prepare this delicacy with a meticulous roasting process, ensuring each slice offers a perfect balance of savory and sweet flavors. Served with soft pancakes, fresh cucumber, and a rich hoisin sauce, this dish is a feast for the senses.', 
            'price' : '$10.00', 
            'image' : 'https://www.shutterstock.com/image-photo/peking-duck-on-wooden-board-600nw-1012140586.jpg'
          }, 
          {'name' : 'Salmon Steak with Lemon Juice', 
            'desc' : 'Savor the freshness of our Salmon Steak with Lemon Juice, a dish that highlights the natural flavors of premium salmon. Grilled to perfection, the salmon is tender and flaky, enhanced by a drizzle of zesty lemon juice that adds a bright and refreshing finish. Accompanied by a side of seasonal vegetables, this dish is a harmonious blend of taste and health.',
            'price' : '$6.00',
            'image' : 'https://static01.nyt.com/images/2017/04/14/dining/14COOKING-SALMON-WITH-LEMON/14COOKING-SALMON-WITH-LEMON-videoSixteenByNineJumbo1600.jpg'
          },
        ],
          
    },

    {
      'name': 'European classic',
      'dishes': 
        [
          {'name' : 'Steak', 'desc' : 'Indulge in our classic Steak, a prime cut of beef cooked to your preference. Whether you prefer it rare, medium, or well-done, our chefs ensure that each bite is juicy and flavorful. Seasoned with a blend of herbs and spices, and served with a side of garlic mashed potatoes and sautéed vegetables, this dish is a timeless favorite for meat lovers', 
            'price' : '$11.00', 
            'image' : 'https://static.vecteezy.com/system/resources/previews/025/066/778/non_2x/steak-with-ai-generated-free-png.png'}, 
          {'name' : 'Beef Wellington', 
            'desc' : 'Delight in the elegance of our Beef Wellington, a luxurious dish featuring a tender filet mignon coated with a savory mushroom duxelles, wrapped in flaky puff pastry, and baked to perfection. Each slice reveals layers of rich flavor, from the buttery pastry to the succulent beef. Accompanied by a rich red wine reduction and a side of seasonal vegetables, this dish is perfect for a special occasion or a gourmet dining experience.',
            'price' : '$7.00',
            'image' : 'https://static.vecteezy.com/system/resources/previews/038/354/425/non_2x/ai-generated-beef-wellington-with-a-golden-pastry-crust-sliced-to-reveal-a-perfectly-cooked-tenderloin-free-photo.jpeg'},
        ],
    }
  ]


  return (
        <div className={`bg-zinc-300 text-black flex flex-col items-center  ${marcellus_sc.className}`}>
          <div className="text-center p-10">
            <h1 className={`text-5xl ${league_script.className}`}>Menu</h1>
          </div>
          <div className="lg:w-3/4 max-md:w-full">
            {
            
              sections.map((section, index) => (
                <section key={index} className="w-full">

                  <div className="text-center p-3"><h1 className="text-3xl">{section.name}</h1></div>
              
                <Accordion transition transitionTimeout={250}>
                {

                  section.dishes.map((dish, index) => (

                    <AccordionItem 
                      key={index} 
                      className={`text-2xl ${lusitana.className} font-bold border-black border-t`} 
                      header={
                        <div>
                          <p>{dish.name}</p>
                          <p>{dish.price}</p>
                        </div>
                      } 
                      panelProps={{ className: `p-4 font-light bg-neutral-400` }} 
                      contentProps={{className: `transition-height duration-200 ease-out`}} 
                      buttonProps={{
                        className: ({ isEnter }) =>
                        `flex w-full p-4 text-left hover:bg-zinc-200 ${isEnter && "bg-slate-999"}`
                      }}
                    > 
                    <div className="justify-between flex lg:items-center lg:flex-row flex-col">
                      <p className="lg:w-5/12 w-11/12">{dish.desc}</p> 
                      <img src={dish.image} width={0} height={0} sizes="100vw" alt={dish.name} className="lg:w-6/12 w-11/12 h-auto border border-black mt-3 lg:mt-0"/>
                    </div>
                    </AccordionItem>
                    
                  ))
                }
                </Accordion>

              </section>
              ))
            
            }
          </div>
        </div>
  )
}
