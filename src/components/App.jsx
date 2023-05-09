import React from "react";
import ContactForm from "./ContactForm";
import ContactsList from "./Contacts";
import Filter from "./Filter";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };
componentDidMount(){
const saveContacts = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(saveContacts);
this.setState ({contacts: parsedContacts});

}

  componentDidUpdate (prevProps, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }


  handleFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = (contact) => {
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
    
  };

  handelCheckUniqContact = (name) => {
    const { contacts } = this.state;
    const isContact = contacts.find((contact) => contact.name === name);
    return (isContact && alert(`${name} is already in contact`));
  };

  handleRemove = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };
 
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm
          onAddContact={this.addContact}
          onCheckUniq={this.handelCheckUniqContact}
        />

        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.handleFilter} />
        <ContactsList contacts={visibleContacts} onRemove={this.handleRemove} />
      </div>
    );
  }
}

export default App;
