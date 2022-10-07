import { ContactsItem } from 'components/ContactItem/ContactsItem';

export const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactsItem
          name={contact.name}
          number={contact.number}
          id={contact.id}
          key={contact.id}
        />
      ))}
    </ul>
  );
};
