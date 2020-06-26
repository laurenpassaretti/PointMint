import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from "./components/AppContainer/AppContainer.js";
import './index.css';
import * as serviceWorker from './serviceWorker';
import { UserProvider } from './utils/UserContext.js';

ReactDOM.render(
  <UserProvider>
    <AppContainer />
  </UserProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();
