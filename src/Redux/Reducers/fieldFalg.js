import { SET_UPDATE_FLAG } from "../Actions/constants";

const initialState = {
  flag: false,
  index: 0,
};

const FieldFlag = (state = initialState, action) => {
  switch (action.type) {
    case SET_UPDATE_FLAG: {
      return {
        flag: !state.flag,
        index: action.payload,
      };
    }
    default:
      return state;
  }
};

export default FieldFlag;
