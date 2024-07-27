'use client'

import { league_script, marcellus_sc, lusitana } from "../ui/fonts"

import Header from "../components/header"
import Input from "../components/input";

export const usedText = {
  'restaurantName': 'Claude  Monet',
  'slogan':'Timeless elegance & exquisite flavours',
  'subslogan':'dining with distinction since 1977',
}
export default function Home() {

  return (
      <>
          <Header textColor="black"></Header>
          <LoginPage></LoginPage>
      </>
  )
}

function LoginPage(){

    function sendLogin(formData : any){
        const login = formData.get("login")
        const password = formData.get("password")
        alert(`Login: ${login}\nPassword: ${password}`)
    }

    return(
        <div className="h-screen w-screen bg-neutral-300 flex justify-center">
            <form action={sendLogin} className="lg:w-1/3 md:w-1/2 w-3/4 mt-20 flex flex-col items-center">
                <Input id="login" text="Login" type="text"></Input>
                <Input id="password" text="Password" type="password"></Input>
                <div className="flex place-items-center justify-between mt-5 w-11/12">
                    <button className="bg-black text-white w-16 h-8" type="submit">Login</button>
                    
                    <div className="flex justify-between w-52">
                        <a className="text-blue-400" href="#">Forgot Password?</a>
                        <a className="text-blue-400" href="/register">Register</a>
                    </div>
                </div>
                
            </form>
        </div>
    )
}