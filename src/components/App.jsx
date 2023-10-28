import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContacts,
  deleteContacts,
  filterContacts,
} from 'redux/ContactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const addNewContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : dispatch(addContacts(newContact));
  };

  const handleFilterContacts = filteredValue => {
    dispatch(filterContacts(filteredValue));
  };

  const getFilterContacts = () => {
    const filterlowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterlowerCase)
    );
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addNewContact={addNewContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} handleFilterContacts={handleFilterContacts} />
      <ContactList
        contacts={getFilterContacts()}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};
