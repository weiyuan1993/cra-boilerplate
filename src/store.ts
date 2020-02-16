import rootReducer from 'src/reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

const middlewares = [thunk]
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares)
));

export default store