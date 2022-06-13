const gameReducer = (state = [], action) => {
  switch (action.type) {
    case 'updateGames':
      return action.payload
    default:
      return state
  }
}

export default gameReducer;
