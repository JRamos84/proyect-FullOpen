import { useState } from "react"
import Country from "./Country"



const Show = (country)=>{
    const [show, setShow] = useState(false)
    const handleShow = ()=> setShow(!show)
    return (
        <>
            { show ?   
            <Country {...country}/> : <p>{country.name}</p>}
            <button onClick={handleShow}>Show</button>
        </>
        
    )
}

export default Show