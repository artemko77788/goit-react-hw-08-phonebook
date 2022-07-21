import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filter.toLowerCase();
export const getContacts = state => state.contacts.item;

export const filteredContacts = createSelector(
  [response => response.data, (_, filter) => filter],

  (contacts, filterValue) => {
    return (
      console.log(contacts),
      contacts?.filter(({ name }) =>
        name.toLowerCase().startsWith(filterValue)
      ) ?? []
    );
  }
);
