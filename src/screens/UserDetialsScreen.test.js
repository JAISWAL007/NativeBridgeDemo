import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import UserDetailsScreen from './UserDetailsScreen';
import {Provider} from 'react-redux';
import {Alert} from 'react-native';
import store from '../redux/store';

describe('User Details Screen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };

  beforeEach(() => {
    jest.mock('react-redux', () => ({
      useSelector: jest.fn((fn) => fn()),
      useDispatch: () => jest.fn(),
    }));
  });

  it('Should render User Details Screen ', () => {
    const tree = render(
      <Provider store={store}>
        <UserDetailsScreen navigation={mockNavigation} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should show error message when user without enter input field hit next button ', async () => {
    jest.spyOn(Alert, 'alert');
    const {getByTestId} = render(
      <Provider store={store}>
        <UserDetailsScreen navigation={mockNavigation} />,
      </Provider>,
    );
    const input = getByTestId('input-field');
    await fireEvent(input, 'onChangeText', '');
    await fireEvent.press(getByTestId('button'));
    expect(Alert.alert).toHaveBeenCalledWith('Error', 'please enter name', [
      {text: 'Ok'},
    ]);
  });

  it('Should able to navigate to home screen when user click on home button', async () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <UserDetailsScreen navigation={mockNavigation} />,
      </Provider>,
    );
    const input = getByTestId('input-field');
    await fireEvent(input, 'onChangeText', 'Testing');
    await fireEvent.press(getByTestId('button'));
    expect(mockNavigation.navigate).toBeCalledTimes(1);
  });
});
