import {USER_DETAILS} from '../actionTypes';

const initialState = {
  name: 'dummy name',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS: {
      return {
        ...state,
        name: action.payload,
      };
    }
    default:
      return state;
  }
}
