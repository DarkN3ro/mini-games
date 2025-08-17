import { Provider } from 'react-redux';
import store from './store/store.jsx';
import App from './components/App.jsx';

const Init = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Init;