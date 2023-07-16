import React, { Component } from 'react';

class ContactList extends Component {
  filterContacts = contacts =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
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
      <ul>
        {/* filtruje wszystko co przychodzi z API, to co przychodzi z API jest w nawiasie */}
        {/* (this.props.contact)to to, co przychodzi z API */}
        {this.filterContacts(this.props.contacts).map(contact => (
          <li key={contact.id}>
            {contact.name} {contact.number}
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
