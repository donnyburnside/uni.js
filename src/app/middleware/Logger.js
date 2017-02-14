export default (store) => (next) => (action) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Action Fired:', action);
  }
  next(action);
};
