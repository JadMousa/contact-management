// components/ContactList.js
import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet. Please add some!</p>
      ) : (
        contacts.map((contact, index) => (
          <ContactItem 
            key={index} 
            index={index} 
            contact={contact} 
            deleteContact={deleteContact} 
          />
        ))
      )}
    </div>
  );
}

export default ContactList;
