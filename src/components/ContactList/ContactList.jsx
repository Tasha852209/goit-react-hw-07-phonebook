import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={phone}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};
