import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/redux';

export const BootstrappedApp: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};
