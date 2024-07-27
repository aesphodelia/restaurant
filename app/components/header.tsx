import { league_script, marcellus_sc, lusitana } from "../ui/fonts";
export const usedText = {
    'restaurantName': 'Claude  Monet',
    'slogan':'Timeless elegance & exquisite flavours',
    'subslogan':'dining with distinction since 1989',
  }

export default function Header({textColor} : {textColor : string}) {
    return (
      <header className={`w-full flex justify-center p-4 bg-none fixed whitespace-pre text-${textColor}`}>
        <div className="flex justify-evenly w-full">
          <a className={`${marcellus_sc.className} text-xl`} href="/menu">menu</a> 
          <a className={`${league_script.className} text-4xl`} href="/">{usedText.restaurantName}</a> 
          <a className={`${marcellus_sc.className} text-xl`} href="/login">sign in</a>
        </div>
      </header>
    )
  }
  