const fetchGameData = (page) => {
  return fetch(`http://34.198.169.107:8080/games/`, {
    method: 'GET'
  })
    .then(res => res.json())
    .catch(err => { throw err });
}

export default fetchGameData;
