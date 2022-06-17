import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { act, cleanup, fireEvent, render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';

import App from '../../src/native/App';
import Header from '../../src/native/components/Header/Header';
import Game from '../../src/native/components/Game/Game';
import Cover from '../../src/native/components/Cover/Cover';
import Rating from '../../src/native/components/Rating/Rating';
import PageButtons from '../../src/native/components/PageButtons/PageButtons';

import * as appStyles from '../../src/native/Styles';
import * as headerStyles from '../../src/native/components/Header/Styles';
import * as gameStyles from '../../src/native/components/Game/Styles';
import * as coverStyles from '../../src/native/components/Cover/Styles';
import * as ratingStyles from '../../src/native/components/Rating/Styles';
import * as pbStyles from '../../src/native/components/PageButtons/Styles';

import { game } from '../shared/sampleData';

jest.mock('../../src/shared/assets/bgr-logo.png');

xdescribe('Native Tests', () => {

  const c = 'children';
  const mockStore = configureStore();
  const state = {
    page: 1,
    games: game
  }

  afterEach(() => cleanup());

  it('should render App correctly', () => {
    const { toJSON } = render(<App />);

    const tree = toJSON();
    expect(tree.type).toBe('View');
    expect(tree.children.length).toBe(2);
    expect(tree.props.style).toStrictEqual(appStyles.default.container);
    expect(tree[c][0]['type']).toBe('View');
    expect(tree[c][1]['type']).toBe('RCTScrollView');

    const logo = tree[c][1][c][0][c][0];
    expect(logo.type).toBe('Image');
    expect(logo.props.style).toStrictEqual(appStyles.default.logo);
  });

  it('should render Header correctly', () => {
    const { toJSON } = render(<Header />);

    const tree = toJSON();
    expect(tree.type).toBe('View');
    expect(tree.children).toBe(null);
    expect(tree.props.style).toStrictEqual(headerStyles.default.container);
  });

  it('should render Game correctly', () => {
    const { toJSON } = render(<Game game={game} />);

    const tree = toJSON();
    expect(tree.type).toBe('View');
    expect(tree.children.length).toBe(3);
    expect(tree.props.style).toStrictEqual(gameStyles.default.container);

    const cover = tree.children[0];
    expect(cover.type).toBe('View');
    expect(cover.children.length).toBe(1);

    const title = tree.children[1];
    expect(title.type).toBe('View');
    expect(title.children.length).toBe(1);
    expect(title[c][0]['props']['style']).toStrictEqual(gameStyles.default.title);
    expect(title[c][0][c][0]).toBe('STRANDED RAFT SURVIVAL 2018!');

    const genres = tree.children[2];
    expect(genres.type).toBe('Text');
    expect(genres.children.length).toBe(1);
    expect(genres.props.style).toStrictEqual(gameStyles.default.genres);
    expect(genres[c][0]).toBe('Simulator, Adventure');
  });

  it('should render Cover correctly', () => {
    const { toJSON } = render(<Cover
      url={game.cover_url}
      rating={game.rating}
    />);

    const tree = toJSON();
    expect(tree.type).toBe('View');
    expect(tree.children.length).toBe(2);

    const coverBL = tree[c][1];
    expect(coverBL.type).toBe('View');
    expect(coverBL.children.length).toBe(1);
    expect(coverBL.props.style).toStrictEqual(coverStyles.default.blContainer);

    const coverBR = coverBL[c][0];
    expect(coverBR.type).toBe('View');
    expect(coverBR.children.length).toBe(1);
    expect(coverBR.props.style).toStrictEqual(coverStyles.default.brContainer);

    const coverTL = coverBR[c][0];
    expect(coverTL.type).toBe('View');
    expect(coverTL.children.length).toBe(1);
    expect(coverTL.props.style).toStrictEqual(coverStyles.default.tlContainer);

    const coverTR = coverTL[c][0];
    expect(coverTR.type).toBe('View');
    expect(coverTR.children.length).toBe(1);
    expect(coverTR.props.style).toStrictEqual(coverStyles.default.trContainer);

    const cover = coverTR[c][0];
    expect(cover.type).toBe('Image');
    expect(cover.children).toBe(null);
    expect(cover.props.style).toStrictEqual(coverStyles.default.cover);
  });

  it('should render Rating correctly', () => {
    const { toJSON } = render(<Rating rating={game.rating} />);

    const tree = toJSON();
    expect(tree.type).toBe('View');
    expect(tree.children.length).toBe(1);
    expect(tree.props.style).toStrictEqual(ratingStyles.default.container);

    const rating = tree[c][0];
    expect(rating.type).toBe('Text');
    expect(rating.children.length).toBe(1);
    expect(rating.props.style).toStrictEqual(ratingStyles.default.rating);
    expect(rating[c][0]).toBe('20/100');
  });

  it('should render PageButtons correctly', () => {
    const store = mockStore(state);
    const { toJSON } = render(
      <Provider store={store}>
        <PageButtons />
      </Provider>
    );

    const tree = toJSON();
    expect(tree.type).toBe('View');
    expect(tree.children.length).toBe(2);

    const buttons = tree[c][1];
    expect(buttons.type).toBe('View');
    expect(buttons.children.length).toBe(7);
    expect(buttons.props.style).toStrictEqual(pbStyles.default.buttonContainer);

    const backButton = buttons[c][0];
    expect(backButton.type).toBe('View');
    expect(backButton.children.length).toBe(1);
    expect(backButton.props.style).toStrictEqual(pbStyles.default.button);

    const backButtonText = backButton[c][0];
    expect(backButtonText.type).toBe('Text');
    expect(backButtonText.children.length).toBe(1);
    expect(backButtonText.props.style).toStrictEqual(pbStyles.default.page);
    expect(backButtonText[c][0]).toBe('<');

    const button1 = buttons[c][1];
    expect(button1.type).toBe('View');
    expect(button1.children.length).toBe(1);
    expect(button1.props.style).toStrictEqual(pbStyles.default.currentButton);

    const button1Text = button1[c][0];
    expect(button1Text.type).toBe('Text');
    expect(button1Text.children.length).toBe(1);
    expect(button1Text.props.style).toStrictEqual(pbStyles.default.currentPage);
    expect(button1Text[c][0]).toBe('1');

    const button2 = buttons[c][2];
    expect(button2.type).toBe('View');
    expect(button2.children.length).toBe(1);
    expect(button2.props.style).toStrictEqual(pbStyles.default.button);

    const button2Text = button2[c][0];
    expect(button2Text.type).toBe('Text');
    expect(button2Text.children.length).toBe(1);
    expect(button2Text.props.style).toStrictEqual(pbStyles.default.page);
    expect(button2Text[c][0]).toBe('2');

    const button3 = buttons[c][3];
    expect(button3.type).toBe('View');
    expect(button3.children.length).toBe(1);
    expect(button3.props.style).toStrictEqual(pbStyles.default.button);

    const button3Text = button3[c][0];
    expect(button3Text.type).toBe('Text');
    expect(button3Text.children.length).toBe(1);
    expect(button3Text.props.style).toStrictEqual(pbStyles.default.page);
    expect(button3Text[c][0]).toBe('3');

    const button4 = buttons[c][4];
    expect(button4.type).toBe('View');
    expect(button4.children.length).toBe(1);
    expect(button4.props.style).toStrictEqual(pbStyles.default.button);

    const button4Text = button4[c][0];
    expect(button4Text.type).toBe('Text');
    expect(button4Text.children.length).toBe(1);
    expect(button4Text.props.style).toStrictEqual(pbStyles.default.page);
    expect(button4Text[c][0]).toBe('4');

    const button5 = buttons[c][5];
    expect(button5.type).toBe('View');
    expect(button5.children.length).toBe(1);
    expect(button5.props.style).toStrictEqual(pbStyles.default.button);

    const button5Text = button5[c][0];
    expect(button5Text.type).toBe('Text');
    expect(button5Text.children.length).toBe(1);
    expect(button5Text.props.style).toStrictEqual(pbStyles.default.page);
    expect(button5Text[c][0]).toBe('5');

    const forwardButton = buttons[c][6];
    expect(forwardButton.type).toBe('View');
    expect(forwardButton.children.length).toBe(1);
    expect(forwardButton.props.style).toStrictEqual(pbStyles.default.button);

    const forwardButtonText = forwardButton[c][0];
    expect(forwardButtonText.type).toBe('Text');
    expect(forwardButtonText.children.length).toBe(1);
    expect(forwardButtonText.props.style).toStrictEqual(pbStyles.default.page);
    expect(forwardButtonText[c][0]).toBe('>');
  });

  it('should render the loading wheel when a new page is selected', async () => {
    const { getByTestId, toJSON } = render(<App />);

    const loadingWheelBefore = toJSON()[c][1][c][0][c][1][c][0][c][0][c][0];
    expect(loadingWheelBefore.props.visible).toBe(false);

    act(() => {
      fireEvent.press(getByTestId('page_5'));
    });

    const loadingWheelAfter = toJSON()[c][1][c][0][c][1][c][0][c][0][c][0];
    expect(loadingWheelAfter.props.visible).toBe(true);
  });

});
