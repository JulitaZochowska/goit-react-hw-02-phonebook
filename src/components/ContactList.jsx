import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <div>
        <h3>Contacts</h3>
        <ul>
          {this.props.contacts.map(contact => (
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
