import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateGames, updatePage } from '../../../../shared/actions';
import fetchGameData from '../../../../shared/services/gameData';

const PageButtons = () => {
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();

  const updateDisplay = async (newPage) => {
    dispatch(updateGames(await fetchGameData(newPage)));
    dispatch(updatePage(newPage));
  }

  const previousPage = (page) => {
    if (page > 1) { updateDisplay(page - 1) }
  }

  return (
    <div className="pb_container">
      <div className="buttons">
        <span onClick={() => previousPage(page)}>
          {'<'}
        </span>
        <span onClick={() => updateDisplay(page)}>
          {page}
        </span>
        <span onClick={() => updateDisplay(page + 1)}>
          {page + 1}
        </span>
        <span onClick={() => updateDisplay(page + 2)}>
          {page + 2}
        </span>
        <span onClick={() => updateDisplay(page + 3)}>
          {page + 3}
        </span>
        <span onClick={() => updateDisplay(page + 4)}>
          {page + 4}
        </span>
        <span onClick={() => updateDisplay(page + 1)}>
          {'>'}
        </span>
      </div>
    </div>
  )
}

export default PageButtons;
