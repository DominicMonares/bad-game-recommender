/**
 * @format
 */

import 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import App from '../../src/native/App';
import Header from '../../src/native/components/Header/Header';
import Game from '../../src/native/components/Game/Game';

import * as appStyles from '../../src/native/Styles';
import * as headerStyles from '../../src/native/components/Header/Styles';
import * as gameStyles from '../../src/native/components/Game/Styles';

import { game } from './sampleData';

jest.mock('../../src/shared/assets/bgr-logo.png');

describe('Native Tests', () => {

  describe('App', () => {
    it('renders App correctly', () => {
      const { toJSON } = render(<App />);

      const tree = toJSON();
      expect(tree.type).toBe('View');
      expect(tree.props.style).toStrictEqual(appStyles.default.container);
      expect(tree.children.length).toBe(2);
      expect(tree['children'][0]['type']).toBe('View');
      expect(tree['children'][1]['type']).toBe('RCTScrollView');

      const logo = tree['children'][1]['children'][0]['children'][0];
      expect(logo.type).toBe('Image');
      expect(logo.props.style).toStrictEqual(appStyles.default.logo);
    });
  });

  describe('Header', () => {
    it('renders Header correctly', () => {
      const { toJSON } = render(<Header />);

      const tree = toJSON();
      expect(tree.type).toBe('View');
      expect(tree.props.style).toStrictEqual(headerStyles.default.container);
      expect(tree.children).toBe(null);
    });
  });

  describe('Game', () => {
    it('renders Game correctly', () => {
      const { toJSON } = render(<Game game={game} />);

      const tree = toJSON();
      expect(tree.type).toBe('View');
      expect(tree.props.style).toStrictEqual(gameStyles.default.container);
      expect(tree.children.length).toBe(3);

      const cover = tree.children[0];
      expect(cover.type).toBe('View');
      expect(cover.children.length).toBe(1);

      const title = tree.children[1];
      expect(title.type).toBe('View');
      expect(title.children.length).toBe(1);
      expect(title['children'][0]['props']['style']).toStrictEqual(gameStyles.default.title);
      expect(title['children'][0]['children'][0]).toBe('STRANDED RAFT SURVIVAL 2018!');

      const genres = tree.children[2];
      expect(genres.type).toBe('Text');
      expect(genres.children.length).toBe(1);
      expect(genres.props.style).toStrictEqual(gameStyles.default.genres);
      expect(genres['children'][0]).toBe('Simulator, Adventure');
    });
  });


});
