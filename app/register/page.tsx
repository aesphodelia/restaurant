'use client'

import { league_script, marcellus_sc, lusitana } from "../ui/fonts"

import Header from "../components/header"
import Input from "../components/input";

const usedText = {
  'restaurantName': 'Claude  Monet',
  'slogan':'Timeless elegance & exquisite flavours',
  'subslogan':'dining with distinction since 1977',
}
export default function Home() {

  return (
      <>
          <Header textColor="black"></Header>
          <RegisterPage></RegisterPage>
      </>
  )
}

function RegisterPage(){

    function sendRegisterQuery(formData : any){
        const login = formData.get("login")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const password = formData.get("password")
        alert(`Login: ${login}\nEmail: ${email}\nPhone: ${phone}\nPassword: ${password}`)
    }

    function updateValue(){
        const pattern="+0 (000) 000 00 00"
        const input = document.getElementById("phone") as HTMLInputElement
        const value = input.value
        let numericValue = ''

        for(let i = 0; i < value.length; i++){
            if(value[i] >= '0' && value[i] <= '9'){
                numericValue += value[i]
            }
        }

        let finalValue = ""
        let j = 0

        for(let i = 0; i < pattern.length; i++){
            if(pattern[i] == '0' && j < numericValue.length){
                finalValue += numericValue[j]
                j++
                continue
            }
            if(j >= numericValue.length)break;
            finalValue += pattern[i]
        }

        input.value = finalValue

    }

    return(
        <div className="h-screen w-screen bg-neutral-300 flex justify-center">
            <form action={sendRegisterQuery} className="lg:w-1/3 md:w-1/2 w-3/4 mt-20 flex flex-col items-center">
                <Input id="login" text="Login" type="text"></Input>
                <label htmlFor="phone" className="text-black flex mt-4 self-start">Phone</label>
                <input onChange={updateValue} pattern="\+[0-9]{1} \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}" name="phone" type="tel" id="phone" className="w-11/12 h-auto border border-black text-black p-2" required/>
                
                <Input id="email" text="Email" type="email"></Input>
                <Input id="password" text="Password" type="password"></Input>
                <div className="flex place-items-center justify-between mt-5 w-11/12">
                    <button className="bg-black text-white w-20 h-8" type="submit">Register</button>
                    
                    <div className="flex justify-between w-48">
                        <a className="text-blue-400" href="#">Forgot Password?</a>
                        <a className="text-blue-400" href="/login">Login</a>
                    </div>
                </div>
                
            </form>
        </div>
    )
}