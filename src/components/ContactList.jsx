import React, { Component } from 'react';

class ContactList extends Component {
  state = {
    filter: '',
  };

  filterContacts = contacts =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    return (
      <div>
        <h3>Contacts</h3>
        <label>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ul>
          {/* filtruje wszystko co przychodzi z API, to co przychodzi z API jest w nawiasie */}
          {/* (this.props.contact)to to, co przychodzi z API */}
          {this.filterContacts(this.props.contacts).map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ContactList;
