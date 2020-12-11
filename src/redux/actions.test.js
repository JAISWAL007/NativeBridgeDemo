import {USER_DETAILS} from './actionTypes';
import * as actions from './actions';

describe('actions', () => {
  it('should create an action to add a user details', () => {
    const payload = 'Test Name';
    const expectedAction = {
      type: USER_DETAILS,
      payload,
    };
    expect(actions.userAction(payload)).toEqual(expectedAction);
  });
});
