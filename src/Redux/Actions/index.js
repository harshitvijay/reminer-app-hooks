import { ADD_REMINDER, CLEAR_REMINDER, DELETE_REMINDER } from "./constants";

export const addReminder = (content) => ({
  type: ADD_REMINDER,
  payload: content,
});

export const clearReminder = () => ({
  type: CLEAR_REMINDER,
});

export const deleteReminder = (index) => ({
  type: DELETE_REMINDER,
  payload: index,
});
