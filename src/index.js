import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Home from './components/Home';

const App = () => {
  const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Home />
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
