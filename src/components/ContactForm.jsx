import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  // phone: '',
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addContact } = this.props;
    addContact(nanoid(), this.state.name);

    // zresetuje cały formularz po wysłaniu
    this.setState(prev => ({ ...INITIAL_STATE }));
  };

  // zeby mona bylo zmienić wartość inputa
  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={'labelName'}>Name</label>
          <input
            id={'labelName'}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {/* <input
            type="tel"
            name="phone"
            value={this.state['phone']}
            onChange={this.handleChange}
          /> */}
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
