import { ToastButton } from '@/components/ToastButton';
import { ToastList } from '@/components/ToastList';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <ToastButton />
      <ToastList />
    </div>
  );
};

export default App;
