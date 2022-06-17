import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { act, cleanup, fireEvent, render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';

import App from '../../src/web/client/src/App';

describe('Web Tests', () => {

  const c = 'children';
  const mockStore = configureStore();
  const state = {
    page: 1,
    games: game
  }

  afterEach(() => cleanup());

  it.only('should render App correctly', () => {

  });

});
