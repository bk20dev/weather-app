import ReactDOM from 'react-dom';
import App from './components/App';
import './scss/index.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducers from './reducers';

const store = createStore(reducers, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
