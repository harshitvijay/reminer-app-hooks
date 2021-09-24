import {
  ADD_REMINDER,
  CLEAR_REMINDER,
  DELETE_REMINDER,
  UPDATE_REMINDER,
  SET_FLAG,
} from "./constants";

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

export const updateReminder = (index, content) => ({
  type: UPDATE_REMINDER,
  payload: {
    index: index,
    content: content,
  },
});

export const setFlag = (index) => ({
  type: SET_FLAG,
  payload: index,
});
