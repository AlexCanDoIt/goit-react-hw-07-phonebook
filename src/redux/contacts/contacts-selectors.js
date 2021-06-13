import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

const getLoading = state => state.contacts.loading;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

// const getVisibleContacts = state => {
//   const allContacts = getAllContacts(state);
//   const normalizedFilter = getFilter(state).toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

export default {
  getAllContacts,
  getFilter,
  getLoading,
  getVisibleContacts,
};
