import './App.css';
import { useState } from 'react';
import ContactForm from './Components/Contactform';
import ContactList from './Components/ContactList';


function App() {
  const [contacts, setContacts] = useState([]); //state for contacts

  const addContact = (contact) => {
    setContacts([...contacts, contact]); //splice operator to copy and add the contact to the array
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts]; //create a copy
    newContacts.splice(index, 1); //remove the contact at the index
    setContacts(newContacts);
  };

  return ( //what the pages returns
    <div className="App">
    <h1>Contact Manager</h1>
    <ContactForm addContact={addContact} /> 
    <ContactList contacts={contacts} deleteContact={deleteContact} />
  </div>
);
}

export default App;
