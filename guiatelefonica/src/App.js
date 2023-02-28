import React, { useEffect, useState } from "react";
import Number from "./component/Number";
import noteService from "./services/notes";

const App = () => {
  // Estados
  const [persons, setPersons] = useState([{ name: "", phone: "",id:"" }]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [action, setAction] = useState(true)

  //Pruebas de server
  useEffect(() => {
    noteService.getAll()
      .then((response) => {
        setPersons(response)
        })
      .catch(error=>{
        console.log('fail')
      })
    
  },[action]);

  /// Funciones de manejo de eventos
  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
    //console.log(newPhone);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      persons.find((person) => person.name === newName) ||
      newName === "" ||
      newPhone === ""
    ) {
      return alert("existe o esta vacio");
    }
    const personAddState = {
      name: newName,
      phone: newPhone,
    };
    noteService.create(personAddState).then((response) => {
      setPersons([...persons, personAddState]);
      setNewName("");
    });
  };
  const handleAction = (event)=>{
    setAction(!action)

    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeName} value={newName} />
          phone: <input onChange={handleChangePhone} value={newPhone}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Number persons={persons} onAction = {handleAction}/>
    </div>
  );
};

export default App;
