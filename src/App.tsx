import React from 'react';
import style from './App.module.scss';
import { Button } from './components/Button';

const App: React.FC = () => {
  // test here

  return <div className={style.container}>
    <Button type='success'>Show Toast Success</Button>
    <Button type='warning'>Show Toast Warning</Button>
    <Button type='error'>Show Toast Error</Button>
    <Button type='info'>Show Toast Info</Button>
  </div>;
};

export default App;
