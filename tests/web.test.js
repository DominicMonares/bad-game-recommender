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

jest.mock('../src/shared/assets/bgr-logo.png');

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

    const leftArrow = (await screen.getByText('<'));
    expect(leftArrow).toBeInTheDocument();
    // console.log('LEFT ', leftArrow)

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


    // expect(tree.children.length).toBe(3);

    // const logo = tree[c][0];
    // expect(logo.type).toBe('img');
    // expect(logo.children).toBe(null);
    // expect(logo.props.className).toBe('logo');

    // const loadingWheelContainer = tree[c][1];
    // expect(loadingWheelContainer.children.length).toBe(1);
    // expect(loadingWheelContainer.props.className).toBe('loading_wheel');

    // const loadingWheel = loadingWheelContainer[c][0];
    // expect(loadingWheel.children.length).toBe(1);
    // expect(loadingWheel['props']['data-testid']).toBe('tail-spin-loading');

    // const loadingWheelSVG = loadingWheel[c][0];
    // expect(loadingWheelSVG.children.length).toBe(2);
    // expect(loadingWheelSVG['props']['data-testid']).toBe('tail-spin-svg');

    // const pageButtonsContainer = tree[c][2];
    // expect(pageButtonsContainer.children.length).toBe(1);
    // expect(pageButtonsContainer.props.className).toBe('pb_container');

    // const pageButtons = pageButtonsContainer[c][0];
    // expect(pageButtons.children.length).toBe(7);
    // expect(pageButtons.props.className).toBe('buttons');

    // const leftArrow = pageButtons[c][0];
    // expect(leftArrow.children.length).toBe(1);
    // expect(leftArrow.props.className).toBe('button');
    // expect(leftArrow[c][0][c][0]).toBe('<');

    // const b1 = pageButtons[c][1];
    // expect(b1.children.length).toBe(1);
    // expect(b1.props.className).toBe('current_button');
    // expect(b1[c][0][c][0]).toBe('1');

    // const b2 = pageButtons[c][2];
    // expect(b2.children.length).toBe(1);
    // expect(b2.props.className).toBe('button');
    // expect(b2[c][0][c][0]).toBe('2');

    // const b3 = pageButtons[c][3];
    // expect(b3.children.length).toBe(1);
    // expect(b3.props.className).toBe('button');
    // expect(b3[c][0][c][0]).toBe('3');

    // const b4 = pageButtons[c][4];
    // expect(b4.children.length).toBe(1);
    // expect(b4.props.className).toBe('button');
    // expect(b4[c][0][c][0]).toBe('4');

    // const b5 = pageButtons[c][5];
    // expect(b5.children.length).toBe(1);
    // expect(b5.props.className).toBe('button');
    // expect(b5[c][0][c][0]).toBe('5');

    // const rightArrow = pageButtons[c][6];
    // expect(rightArrow[c].length).toBe(1);
    // expect(rightArrow.props.className).toBe('button');
    // expect(rightArrow[c][0][c][0]).toBe('>');
  });

  // it('should render Games correctly', () => {
  //   const store = mockStore(state);
  //   const tree = render(
  //     <Provider store={store}>
  //       <Game game={games[0]} />
  //     </Provider>
  //   );

  //   expect(tree.children.length).toBe(3);
  //   expect(tree.props.className).toBe('game_container');

  //   const cover = tree[c][0]
  //   expect(cover.children.length).toBe(1);
  //   expect(cover.props.className).toBe('cover_container');

  //   const coverImgContainer = cover[c][0];
  //   expect(coverImgContainer.children.length).toBe(2);
  //   expect(coverImgContainer.type).toBe('a');
  //   expect(coverImgContainer.props.href).toBe(games[0]['url']);

  //   const ratingContainer = coverImgContainer[c][0];
  //   expect(ratingContainer.children.length).toBe(1);
  //   expect(ratingContainer.props.className).toBe('rating-container');

  //   const rating = ratingContainer[c][0];
  //   expect(rating.children.length).toBe(1);
  //   expect(rating[c][0]).toBe('10/100');
  //   expect(rating.props.className).toBe('rating');

  //   const coverImg = coverImgContainer[c][1];
  //   expect(coverImg.children).toBe(null);
  //   expect(coverImg.type).toBe('img');
  //   expect(coverImg.props.className).toBe('cover');
  //   expect(coverImg.props.src).toBe(games[0]['cover_url']);

  //   const titleContainer = tree[c][1];
  //   expect(titleContainer.children.length).toBe(1);
  //   expect(titleContainer.type).toBe('a');
  //   expect(titleContainer.props.className).toBe('title_container');
  //   expect(titleContainer.props.href).toBe(games[0]['url']);

  //   const title = titleContainer[c][0];
  //   expect(title.children.length).toBe(1);
  //   expect(title[c][0]).toBe('Day One: Garry\'s Incident');
  //   expect(title.props.className).toBe('title');

  //   const genres = tree[c][2];
  //   expect(genres.children.length).toBe(1);
  //   expect(genres[c][0]).toBe('Shooter, Adventure, Indie');
  //   expect(genres.props.className).toBe('genres');
  // });

  // it('should update page on page click', async () => {
  //   const store = mockStore(state);
  //   const tree = render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   );
  //   // console.log('TREE ', screen);

  //   fireEvent.click(await screen.findByTestId('button'));

  //   // console.log('TYEST ', store)

  //   const loadingWheelContainer = tree[c][1];
  //   const loadingWheel = loadingWheelContainer[c][0];
  //   const loadingWheelSVG = loadingWheel[c][0];
  //   const pageButtonsContainer = tree[c][2];
  //   const pageButtons = pageButtonsContainer[c][0];
  //   const leftArrow = pageButtons[c][0];
  //   const b1 = pageButtons[c][1];
  //   const b2 = pageButtons[c][2];
  //   const b3 = pageButtons[c][3];
  //   const b4 = pageButtons[c][4];
  //   const b5 = pageButtons[c][5];
  //   const rightArrow = pageButtons[c][6];

  // });

});
