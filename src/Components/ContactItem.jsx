// components/ContactItem.js
import React from 'react';

function ContactItem({ contact, index, deleteContact }) {
  return (
    <div>
      <p>
        <strong>{index + 1}. {contact.name}</strong> - {contact.email}
        <button onClick={() => deleteContact(index)}>Delete</button>
      </p>
    </div>
  );
}

export default ContactItem;
