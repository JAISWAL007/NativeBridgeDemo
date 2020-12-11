import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Alert} from 'react-native';
import ButtonScreen from './ButtonScreen';

describe('Button Screen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };
  it('Should render button screen', () => {
    const tree = render(<ButtonScreen navigation={mockNavigation} />);
    expect(tree).toMatchSnapshot();
  });

  it('Should able to go back when user click on back arrow button', async () => {
    const {getByTestId} = render(<ButtonScreen navigation={mockNavigation} />);
    const backButton = getByTestId('back-button');
    await fireEvent.press(backButton);
    expect(mockNavigation.goBack).toBeCalledTimes(1);
  });

  it('Should able to navigate to home screen when user click on home button', async () => {
    const {getByTestId} = render(<ButtonScreen navigation={mockNavigation} />);
    const homeButton = getByTestId('user-details');
    await fireEvent.press(homeButton);
    expect(mockNavigation.navigate).toBeCalledTimes(1);
  });

  it('Should able to display popup when user click on onPress 1st button', async () => {
    jest.spyOn(Alert, 'alert');
    const {getByTestId} = render(<ButtonScreen navigation={mockNavigation} />);
    const firstButton = getByTestId('button-1');
    await fireEvent.press(firstButton);
    expect(Alert.alert).toHaveBeenCalledWith('Error', 'coming soon', [
      {text: 'Ok'},
    ]);
  });

  it('Should able to display popup when user click on onPress 2nd button', async () => {
    jest.spyOn(Alert, 'alert');
    const {getByTestId} = render(<ButtonScreen navigation={mockNavigation} />);
    const secondButton = getByTestId('button-2');
    await fireEvent.press(secondButton);
    expect(Alert.alert).toHaveBeenCalledWith('Error', 'coming soon', [
      {text: 'Ok'},
    ]);
  });

  it('Should able to display popup when user click on onPress 3rd button', async () => {
    jest.spyOn(Alert, 'alert');
    const {getByTestId} = render(<ButtonScreen navigation={mockNavigation} />);
    const thirdButton = getByTestId('button-3');
    await fireEvent.press(thirdButton);
    expect(Alert.alert).toHaveBeenCalledWith('Error', 'coming soon', [
      {text: 'Ok'},
    ]);
  });
});
