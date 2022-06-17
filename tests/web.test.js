/**
 * @jest-environment jsdom
*/

import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import App from '../src/web/client/src/App';
import Game from '../src/web/client/src/components/Game.jsx';

import { games } from './SampleData';

jest.mock('../src/shared/assets/logo.png');

describe('Web Tests', () => {

  const c = 'children';
  const mockStore = configureStore();
  const state = {
    page: 1,
    games: games
  }

  afterEach(() => cleanup());

  it('should render App correctly', async () => {
    const store = mockStore(state);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const logo = (await screen.getByTestId('logo'));
    expect(logo).toBeInTheDocument();

    const loaderWheel = (await screen.getByTestId('lw'));
    expect(loaderWheel).toBeInTheDocument();

    const leftArrow = (await screen.getByText('<'));
    expect(leftArrow).toBeInTheDocument();

    const b1 = (await screen.getByText('1'));
    expect(b1).toBeInTheDocument();

    const b2 = (await screen.getByText('2'));
    expect(b2).toBeInTheDocument();

    const b3 = (await screen.getByText('3'));
    expect(b3).toBeInTheDocument();

    const b4 = (await screen.getByText('4'));
    expect(b4).toBeInTheDocument();

    const b5 = (await screen.getByText('5'));
    expect(b5).toBeInTheDocument();

    const rightArrow = (await screen.getByText('>'));
    expect(rightArrow).toBeInTheDocument();
  });

  it('should render Games correctly', async () => {
    const store = mockStore(state);
    const tree = render(
      <Provider store={store}>
        <Game game={games[0]} />
      </Provider>
    );

    const cover = (await screen.getByTestId('cover'));
    expect(cover).toBeInTheDocument();

    const rating = (await screen.getByText('10/100'));
    expect(rating).toBeInTheDocument();

    const title = (await screen.getByText('Day One: Garry\'s Incident'));
    expect(title).toBeInTheDocument();

    const genres = (await screen.getByText('Shooter, Adventure, Indie'));
    expect(genres).toBeInTheDocument();
  });

});
