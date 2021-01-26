import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import configureStore from './store';
import { fetch } from './store/csrf';
import * as sessionActions from './store/session';
import * as quizActions from './store/quiz'

const store = configureStore();

if (process.env.NODE_ENV !== "production") {

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.quizActions = quizActions;
}

// const Carrot = () => (
//   <div style={{ color: "orange", fontSize: "100px" }}>
//     <i className="fas fa-carrot"></i>
//   </div>
// );

function Root() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
          {/* <Carrot /> */}
        </BrowserRouter>
      </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
