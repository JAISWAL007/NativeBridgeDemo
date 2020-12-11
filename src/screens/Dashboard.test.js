import React from 'react';
import {NativeModules} from 'react-native';
import {
  fireEvent,
  flushMicrotasksQueue,
  render,
} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Dashboard from './Dashboard';
import reducers from '../redux/reducers';

describe('Dashboard Screen', () => {
  const mockNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };

  beforeEach(() => {
    const isEmulator = jest.fn(() => Promise.resolve(true));
    NativeModules.DeviceDetails = {
      isEmulator,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderWithRedux = (
    component,
    {initialState, store = createStore(reducers, initialState)} = {},
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
    };
  };

  it('Should render Dashboard screen', async () => {
    const tree = renderWithRedux(<Dashboard navigation={mockNavigation} />);
    await flushMicrotasksQueue();
    expect(tree).toMatchSnapshot();
  });

  it('Should able to go back when user click on back arrow button', async () => {
    const {getByTestId} = renderWithRedux(
      <Dashboard navigation={mockNavigation} />,
    );
    await flushMicrotasksQueue();
    const backButton = getByTestId('back-button');
    await fireEvent.press(backButton);
    expect(mockNavigation.goBack).toBeCalledTimes(1);
  });

  it('Should able to navigate to button screen when user click on next button', async () => {
    const {getByTestId} = renderWithRedux(
      <Dashboard navigation={mockNavigation} />,
    );
    await flushMicrotasksQueue();
    const homeButton = getByTestId('next-button');
    await fireEvent.press(homeButton);
    expect(mockNavigation.navigate).toBeCalledTimes(1);
  });

  it('Should able to call native bridge and display when emulator', async () => {
    const {getByTestId} = renderWithRedux(
      <Dashboard navigation={mockNavigation} />,
    );
    await flushMicrotasksQueue();
    const label = getByTestId('display-label');
    expect(label.props.children).toStrictEqual(['Running on ', 'Emulator']);
  });

  it('Should able to call native bridge and display when Device', async () => {
    jest.clearAllMocks();
    const isEmulator = jest.fn(() => Promise.resolve(false));
    NativeModules.DeviceDetails = {
      isEmulator,
    };
    const {getByTestId} = renderWithRedux(
      <Dashboard navigation={mockNavigation} />,
    );
    await flushMicrotasksQueue();
    const label = getByTestId('display-label');
    expect(label.props.children).toStrictEqual(['Running on ', 'Devices']);
  });

  it('Should render with redux with custom store', async () => {
    const {getByTestId} = renderWithRedux(
      <Dashboard navigation={mockNavigation} />,
    );
    await flushMicrotasksQueue();
    const label = getByTestId('store-label');
    expect(label.props.children).toStrictEqual(['Welcome ', 'dummy name']);
  });
});
