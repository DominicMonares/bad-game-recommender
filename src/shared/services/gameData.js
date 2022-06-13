const fetchGameData = async (page) => {
  const gameData = await fetch(`http://34.198.169.107:8080/games/${page}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .catch(err => { throw err });

  return gameData;
}

export default fetchGameData;
