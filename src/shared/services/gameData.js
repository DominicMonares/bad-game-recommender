import axios from 'axios';

const fetchGameData = (page) => {
  return axios.get(`http://34.198.169.107:8080/games/${page}`)
    .then(res => res.data)
    .catch(err => { throw err });
}

export default fetchGameData;
