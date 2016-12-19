import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

// const enhancer = compose(
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
const enhancer = () => {
  if (process.env.DEBUG && window.__REDUX_DEVTOOLS_EXTENSION__) {
    return (compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
    );
  }
  return (compose(
      applyMiddleware(thunk),
    )
  );
};


export default function createStoreWithMiddleware(initialState) {
  // console.log(process.env.DEBUG);

  return createStore(reducer, initialState, enhancer());
}
