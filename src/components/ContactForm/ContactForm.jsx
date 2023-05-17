import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.dublicateContacts(e)) {
      alert(`${this.state.name} already in contacts`);
      return;
    }
    const { name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.props.addContact(newContact);
    this.reset();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            className={css.input}
            value={name}
            onChange={this.handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            className={css.input}
            value={number}
            onChange={this.handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.inputBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
