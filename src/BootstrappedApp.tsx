import React from 'react';
import App from './App';
import { Provider as ReduxProvider} from 'react-redux';
import { store } from './services/redux';
import { Toast } from './components/Toast';

export const BootstrappedApp: React.FC = () => {
  return <ReduxProvider store={store}>
    <Toast/>
    <App/>
  </ReduxProvider>
};
