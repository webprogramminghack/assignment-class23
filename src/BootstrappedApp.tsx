import { store } from '@/services/redux';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';

export const BootstrappedApp: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
};
