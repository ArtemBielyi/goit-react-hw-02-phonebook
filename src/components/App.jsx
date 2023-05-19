import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  dublicateContacts = e => {
    return this.state.contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        e.target.elements.name.value.toLowerCase()
    );
  };

  render() {
    const normalizedNames = this.state.filter.toLocaleLowerCase();

    const visibleNames = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedNames)
    );
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form
          onSubmit={this.formSubmitHandler}
          addContact={this.addContact}
          dublicateContacts={this.dublicateContacts}
        />
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <h2>Contacts</h2>
        <ContactList
          contacts={visibleNames}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
