'use client'

import { league_script, marcellus_sc, lusitana } from "../ui/fonts"
import { useState } from "react";

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
          <BookingPage></BookingPage>
      </>
  )
}


function Calendar(){
    const [date, setDate] = useState(new Date())

    let monthLength = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    let monthName = date.toString().split(' ')[1]

    const second = 1000
    const minute = 60 * second
    const hour = 60 * minute
    const day = 24 * hour

    function turnPrevMonth(){
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
    }
    function turnNextMonth(){
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
    }

    return(
        <div className="w-44 border border-black h-min ml-auto mr-auto">
            <div className="bg-red-500 h-6 w-full flex justify-between">
                <button onClick={turnPrevMonth} className="pl-1"> &lt; </button>
                {monthName}
                <button onClick={turnNextMonth} className="pr-1"> &gt; </button>
            </div>  
            <CalendarMonth date={date}></CalendarMonth>
        </div>
    )
}

function CalendarMonth({date} : {date : Date}){
    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    let array = []
    let startDay = date.getDay()
    let daysCount = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    for(let i = 0; i < startDay; i++){
        array.push('')
    }

    for(let i = 1; i <= daysCount; i++){
        array.push(i)
    }

    return (
        <div className="w-full text-center">
            <div className="grid grid-cols-7 w-full bg-neutral-100">  
                {
                    weekDays.map((weekDay, i) => {
                        return (
                            <div key={i} className="w-6 h-6 text-center text-black">
                                {weekDay}
                            </div>
                        )
                    })
                }

                {array.map((day, i) => {
                    if(day === ''){
                        return(
                            <CalendarCell disabled day={day} key={i}></CalendarCell>
                        )
                    }
                    return(
                        <CalendarCell day={day} key={i} date={date}></CalendarCell>
                    )
                })}

            </div>
        </div>
    )
}

function getFreeHours(){
    const days = [{'time' : '09:30'}, {'time' : '10:30'}, {'time' : '11:30'}, {'time' : '12:30'}, {'time' : '13:30'}, {'time' : '14:30'}]
    return days
}

function CalendarCell({day, disabled, date} : {day : number | string, disabled? : boolean, date? : Date}){
    function printDay(){
        if(typeof day === 'number' && date != undefined){
            console.log(new Date(date.getFullYear(), date.getMonth(), day))
            const freeHours = getFreeHours()

            const freeHoursDiv = document.getElementById('freeHoursDiv')
            const availableTime = document.getElementById('availableTime')
            if(freeHoursDiv === null || availableTime == null)
                return

            let freeHoursStrings = freeHours.map((object, index) => {

                return(
                    `<button key="${index}" class="w-16 h-8 text-black text-center border border-black focus:bg-black focus:text-white">
                        ${object.time}
                    </button>`
                )
            })
            freeHoursDiv.innerHTML = ``
            
            for(let freeHoursString of freeHoursStrings){
                freeHoursDiv.innerHTML += freeHoursString
                console.log(freeHoursString)
            }

            availableTime.innerText = `Available Time at ${date.toString().split(' ')[1]} ${day}:`
        }
    }

    return (
        <button onClick={printDay} disabled={disabled} className="w-6 h-5 bg-neutral-300 text-center text-black focus:bg-black focus:text-white">
            {day}
        </button>
    )
}

function BookingPage(){

    function sendBookingQuery(formData : any){
        const name = formData.get("name")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const size = formData.get("size")
        alert(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSize: ${size}`)
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
        <div className={`${lusitana.className} h-max w-screen bg-neutral-300 flex justify-center`}>
        

            <div className="lg:w-1/3 md:w-1/2 w-3/4 mt-20">

                <hr className="border border-black w-full mb-10"></hr>
                <h2 className="text-2xl text-black text-center mb-10">Date & time</h2>

                <div className="w-full">
                    <Calendar></Calendar>
                    <FreeHours></FreeHours>
                </div>

                <form action={sendBookingQuery} className="w-full flex flex-col items-center">

                <hr className="border border-black w-full mt-10 mb-10"></hr>

                <h2 className="text-2xl text-black">Contacts</h2>

                <Input id="name" text="Name" type="text"></Input>
                <label htmlFor="phone" className="text-black flex mt-4 self-start">Phone</label>
                <input onChange={updateValue} pattern="\+[0-9]{1} \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}" name="phone" type="tel" id="phone" className="w-11/12 h-auto border border-black text-black p-2" required/>
                {/* <Input id="email" text="Email" type="email"></Input> */}

                <button className="mt-6 text-white p-3 bg-black mb-10">Reserve</button>
                </form>

            </div>
        </div>
    )
}

function FreeHours(){
    return (
        <div className="lg:w-2/3 sm:w-full text-start mt-10">
            <p id="availableTime" className="text-black mt-10 md:mt-0">
                
            </p>
            <div id="freeHoursDiv" className="h-min mx-auto mt-3 flex flex-wrap">
                
            </div>
        </div>
    )
}