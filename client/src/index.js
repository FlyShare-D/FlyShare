import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { store } from './app/store'
import { Provider } from 'react-redux'

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
  <App />
</Provider>,
);
