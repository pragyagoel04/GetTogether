import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import * as storage from 'redux-storage';

const engine = createEngine('gettogether');
const storageMiddleware = storage.createMiddleware(engine);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(storageMiddleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const load = storage.createLoader(engine);
load(store)
  .then((newState) => console.log('Loaded state:', newState))
  .catch(() => console.log('Failed to load previous state'));

export {store};
