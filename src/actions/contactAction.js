import { GET_CONTACTS } from "./types";
import { ADD_CONTACTS } from "./types";
import { DELETE_CONTACTS } from "./types";

export const getContacts = () => {
  return {
    type: GET_CONTACTS,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACTS,
    payload: id,
  };
};

export const addContacts = (contact) => {
  return {
    type: ADD_CONTACTS,
    payload: contact,
  };
};
