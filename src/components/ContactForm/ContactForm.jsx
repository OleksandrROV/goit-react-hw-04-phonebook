import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {
  PropTypes.ContactForm = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ),
    filter: PropTypes.string.isRequired,
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState(() => nanoid());

  const handleSubmit = event => {
    event.preventDefault();
    setId(nanoid());
    onSubmit({ name, number, id });
    console.log('in handleSubmit');
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value.trim());

        break;
      case 'number':
        setNumber(value.trim());
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px' }}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};
export default ContactForm;

