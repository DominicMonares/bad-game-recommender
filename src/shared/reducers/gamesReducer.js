const gamesReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_GAMES':
      return action.payload;
    default:
      return state;
  }
}

export default gamesReducer;
