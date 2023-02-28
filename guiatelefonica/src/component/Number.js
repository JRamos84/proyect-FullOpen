import noteService from "../services/notes";

const Number = ({ persons, onAction }) => {
  const handleDelete = (id) => {
    onAction()
    if (window.confirm("Do you really want to delete?")) {  
      noteService
        .DELETE(id)
        .catch(error=>console.log('fail delete'))
    }
  };

  return (
    <div>
      <ul>
        {persons.map((person) => {
          return (
            <li key={person.id}>
              {person.name} {person.phone}
              <button 
            
              onClick={() => handleDelete(person.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Number;
