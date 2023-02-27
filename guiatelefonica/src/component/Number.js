
const Number = ({persons})=>{
    return (
        <div>
            <ul>{
                persons.map((person)=>{
                    return <li key={person.name}>{person.name} {person.phone} </li>
                })
            }</ul>
        </div>
    )
}


export default Number