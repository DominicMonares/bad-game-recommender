export const updatePage = (page) => {
  return {
    type: 'UPDATE_PAGE',
    payload: page
  }
}

export const updateGames = (games) => {
  return {
    type: 'UPDATE_GAMES',
    payload: games
  }
}
