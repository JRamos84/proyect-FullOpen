import Show from "./Show"
import Country from "./Country"


const Display = ({countries})=>{

     return (
        
        <>{countries.length > 10 ? 'Too many matches, specify another filter':
            <ul>

                {countries.map(country=>(
                    <li key={country.name}>
                     
                     {countries.length !==1 ?
                      <Show {...country}/>  :  
                    <Country {...country} />
                    }
                    </li>               
                ))}
            </ul>}
        </>
     )}

export default Display