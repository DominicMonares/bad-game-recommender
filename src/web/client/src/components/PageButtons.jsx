import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateGames, updatePage } from '../../../../shared/actions';
import fetchGameData from '../../../../shared/services/gameData';

const PageButtons = (props) => {
  const setLoading = props.setLoading;
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();

  const updateDisplay = async (newPage) => {
    setLoading(true);
    dispatch(updateGames(await fetchGameData(newPage)));
    dispatch(updatePage(newPage));
    setLoading(false);
  }

  const previousPage = (page) => {
    if (page > 1) { updateDisplay(page - 1) }
  }

  return (
    <div className="pb_container">
      <div className="buttons">
        <div className="button" onClick={() => previousPage(page)}>
          <span>{'<'}</span>
        </div>
        <div className="current_button">
          <span>{page}</span>
        </div>
        <div
          className="button"
          data-testid="button"
          onClick={() => updateDisplay(page + 1)}
        >
          <span>{page + 1}</span>
        </div>
        <div className="button" onClick={() => updateDisplay(page + 2)}>
          <span>{page + 2}</span>
        </div>
        <div className="button" onClick={() => updateDisplay(page + 3)}>
          <span>{page + 3}</span>
        </div>
        <div className="button" onClick={() => updateDisplay(page + 4)}>
          <span>{page + 4}</span>
        </div>
        <div className="button" onClick={() => updateDisplay(page + 1)}>
          <span>{'>'}</span>
        </div>
      </div>
    </div>
  )
}

export default PageButtons;
