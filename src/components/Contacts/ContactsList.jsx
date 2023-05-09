import React from "react";
import PropTypes from "prop-types";
import { List, ItemList, Contact, ContactBox, Button } from "./Contacts.styled"

function ContactsList({ contacts, onRemove }) {
  return (
    <div>
      {contacts.length !== 0 ? (
        <List>
          {contacts.map((contact) => {
            return (
              <ItemList key={contact.id}>
                <ContactBox><Contact>{contact.name}:</Contact> {contact.number}</ContactBox>
                <Button onClick={() => onRemove(contact.id)}>delete</Button>
              </ItemList>
            );
          })}
        </List>
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
