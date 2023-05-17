import React from 'react';
import { PropTypes } from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';
const ContactList = ({ contacts, deleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={css.listItem}>
        <p className={css.title}>{name}</p>
        <p>{number}</p>
        <button className={css.btn} onClick={() => deleteContact(id)}>
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
