/**
 * @format
 */

import 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';

import App from '../../src/native/App';
import { logoStyle } from './sampleData'

jest.mock('../../src/shared/assets/bgr-logo.png');

describe('Native Tests', () => {

  describe('App', () => {
    it('renders App correctly', () => {
      const { toJSON } = render(<App />);
      const tree = toJSON();
      const logo = tree['children'][1]['children'][0]['children'][0];

      expect(tree.type).toBe('View');
      expect(tree.props.style).toStrictEqual({ flex: 1 });
      expect(tree.children.length).toBe(2);
      expect(tree['children'][0]['type']).toBe('View');
      expect(tree['children'][1]['type']).toBe('RCTScrollView');
      expect(logo.type).toBe('Image');
      expect(logo.props.style).toStrictEqual(logoStyle);
    });

    // it('calls useEffect on App load', () => {
    //   let component;
    //   act(() => {
    //     component = create(<App />);
    //   });

    //   const tree = component.toJSON();
    //   const scrollView = tree['children'][1]['children'][0]['children'];
    //   const logo = scrollView[0];
    //   console.log('COMP ', scrollView);
    // });
  });

  describe('')




});
