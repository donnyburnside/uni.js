import { applyMiddleware } from 'redux';

const thunk = require('redux-thunk').default;
import Logger from './Logger';

export default applyMiddleware(thunk, Logger);
