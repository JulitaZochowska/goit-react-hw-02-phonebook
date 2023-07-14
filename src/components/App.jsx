import ContactForm from './ContactForm';
import ContactList from './ContactList';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = (id, name, number) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: id,
          name: name,
          number: number,
        },
      ],
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <ContactForm addContact={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;

// export const App = () => {
//   const state = {
//     contacts: [],
//     name: '',
//   };

//   const addContact = newContact => {
//     console.log(newContact);
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <ContactForm addContact={addContact} />
//       <ContactList contacts={state.contacts} />
//     </div>
//   );
// };
