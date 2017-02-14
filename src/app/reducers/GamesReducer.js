export default (state = {
  error: null,
  fetching: false,
  fetched: false,
  items: []
}, action) => {

  switch (action.type) {
    case 'FETCH_GAMES_PENDING':
      state = Object.assign({}, state, {
        fetching: true
      });
    break;

    case 'FETCH_GAMES_FULFILLED':
      state = Object.assign({}, state, {
        fetching: false,
        fetched: true,
        items: action.payload
      });
    break;

    case 'FETCH_GAMES_REJECTED':
      state = Object.assign({}, state, {
        fetching: false
      });
    break;
  };

  return state;
};
