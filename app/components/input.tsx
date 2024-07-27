import { createRef } from "react"

let prevValue = ''

export default function Input({id, text, type} : {id : string, text : string, type: string}){
    return (
        <>
            <label htmlFor={id} className="text-black flex mt-4 self-start">{text}</label>
            <input name={id} type={type} id={id} className="w-11/12 h-auto border border-black text-black p-2" required/>
        </>
    )

    

    
}