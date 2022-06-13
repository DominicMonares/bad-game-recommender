const updatePage = (page) => {
  return {
    type: 'updatePage',
    payload: page
  }
}

const updateGames = (games) => {
  return {
    type: 'updateGames',
    payload: games
  }
}

export { updatePage, updateGames }
