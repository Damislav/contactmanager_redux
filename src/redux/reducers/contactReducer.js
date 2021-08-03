import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  GET_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
} from "../actions/types";

const initialState = {
  contacts: [],
  contact: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
      };
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case UPDATE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          return contact.id === action.payload.id
            ? (contact = action.payload)
            : contact;
        }),
      };
    }

    default:
      return state;
  }
}
