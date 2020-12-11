import reducer from './UserDetails';
import {USER_DETAILS} from '../actionTypes';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({name: 'dummy name'});
  });

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: USER_DETAILS,
        payload: 'new name testing',
      }),
    ).toEqual({
      name: 'new name testing',
    });
  });
});
