import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactsSlice';

export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer,
  },
});
