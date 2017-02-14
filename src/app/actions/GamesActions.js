import axios from 'axios';

function fetchGamesPending() {
  return {
    type: 'FETCH_GAMES_PENDING'
  };
};

function fetchGamesFulfilled(data) {
  return {
    type: 'FETCH_GAMES_FULFILLED',
    payload: data,
    timestamp: Date.now()
  };
};

function fetchGamesRejected(error) {
  return {
    type: 'FETCH_GAMES_REJECTED',
    payload: error
  };
};

export function fetchGames() {
  return (dispatch) => {
    // Update app state to inform were starting the API call for games
    dispatch(fetchGamesPending())

    // Return a promise
    return axios.get('https://reqres.in/api/users')
      .then((response) => {
        dispatch(fetchGamesFulfilled(response.data.data));
      })
      .catch((err) => {
        dispatch(fetchGamesRejected(err));
      });
  };
};
