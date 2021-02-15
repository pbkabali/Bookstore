import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './components/App';

const initialState = {
  books: [
    {
      id: (Math.random() * 30000).toFixed(0),
      title: 'Dropping Lines',
      category: 'Biography',
    },
    {
      id: (Math.random() * 30000).toFixed(0),
      title: 'Kill the Messenger',
      category: 'Action',
    },
    {
      id: (Math.random() * 30000).toFixed(0),
      title: 'The Watch',
      category: 'History',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
