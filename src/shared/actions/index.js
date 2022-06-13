export const updatePage = (page) => {
  return {
    type: 'updatePage',
    payload: page
  }
}

export const updateGames = (games) => {
  return {
    type: 'updateGames',
    payload: games
  }
}
