/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/native/App';

jest.mock('../src/shared/assets/bgr-logo.png');

describe('Native Tests', () => {

  it('renders correctly', () => {
    const test = renderer.create(<App />);
  });

})
