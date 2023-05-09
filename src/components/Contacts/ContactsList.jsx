import React from "react";
import PropTypes from "prop-types";

function ContactsList({ contacts, onRemove }) {
  return (
    <div>
      {contacts.length !== 0 ? (
        <ul>
          {contacts.map((contact) => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button onClick={() => onRemove(contact.id)}>delete</button>
              </li>
            );
          })}
        </ul>
      ) : (
        "Your contact list is empty"
      )}
    </div>
  );
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  contact: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
};
