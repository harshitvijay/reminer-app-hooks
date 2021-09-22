import {
  ADD_REMINDER,
  CLEAR_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER,
} from "../Actions/constants";

const reminders = [];

const RootReducer = (state = reminders, action) => {
  switch (action.type) {
    case ADD_REMINDER: {
      return [...state, action.payload];
    }
    case CLEAR_REMINDER: {
      return [];
    }
    case DELETE_REMINDER: {
      state.splice(action.payload, 1);
      return [...state];
    }
    case UPDATE_REMINDER: {
      const { index, content } = action.payload;
      state.splice(index, 1, content);
      return [...state];
    }
    default:
      return state;
  }
};

export default RootReducer;
