const Country = ({name, flag, capital, population, languages})=>{
    const Idiom = Object.values(languages);
    return (
        <>
        
        <h1>{name}</h1>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <h2>Language</h2>
        {Idiom.map(language=><div key={name}>{language}</div>)}


        <img src={flag} alt={"name"}/>
        </>
    )
}

export default Country
