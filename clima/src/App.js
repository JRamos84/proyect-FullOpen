import React , {useEffect, useState} from "react"
import axios from "axios"
import Display from "./component/Display";



const App = ()=>{
    const [countries ,setCountries] = useState([{
        name:'',
        flag:'',
        capital:'',
        population:'',
        languages: [] 
    }]);
    const [name, setName] = useState('')
    const  handleChange = (event)=> setName(event.target.value)

    useEffect(()=>{
      
         if(name === ''){
            return 
         }
        // SOLICITUD DE DATOS DE PAISES   
        axios
            .get(`https://restcountries.com/v3.1/name/${name}`)
            .then(response=>{
             const FetchCountry = response.data.map(list => ({name:list.name.common, flag: list.flags.png, capital: list.capital, population:list.population, languages: list.languages})) 
            setCountries(FetchCountry)
             })

        
        

    },[name])
    return(

        <>
            <label>Find countries</label>
            <input type='text' onChange={handleChange} />    
            { !name ? 'Busque un pais' : <Display countries={countries} />}        
        </>
    )
}

export default App