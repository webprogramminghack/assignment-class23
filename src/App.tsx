import React from 'react';
import ToastList from './components/ToastList';
import ToastButton from './components/ToastButton';

const App: React.FC = () => {
  return (
    <div>
      <ToastButton />
      <ToastList />
    </div>
  );
};

export default App;
