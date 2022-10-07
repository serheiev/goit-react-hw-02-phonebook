import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contact/Contact';
import { nanoid } from 'nanoid';
import { InputFilter } from './InputFilter/InputFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  contactSubmit = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    if (this.state.contacts.map(el => el.name).includes(contact.name)) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.contactSubmit}></Form>
        </Section>

        <Section title="Contacts">
          <InputFilter />
          <Contacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
