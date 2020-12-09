import {USER_DETAILS} from './actionTypes';

export const userAction = (userName) => {
  return {
    type: USER_DETAILS,
    payload: userName,
  };
};
