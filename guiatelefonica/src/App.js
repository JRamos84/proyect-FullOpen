import React, { useEffect, useState } from "react";
import Number from "./component/Number";
import noteService from "./services/notes";

const App = () => {
  // Estados 
  const [persons, setPersons] = useState([{ name: "", phone: "" }]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");

//Pruebas de server
useEffect(()=>{
  noteService
    .getAll()
    .then(response =>{
      console.log(response)
    })
},[])


/// Funciones de manejo de eventos
  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
    console.log(newPhone);
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
    setPersons([...persons, personAddState]);

    setNewName("");
  };

  

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
      <Number persons={persons} />
    </div>
  );
};

export default App;
