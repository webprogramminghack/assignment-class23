import React from 'react';
import style from './App.module.scss';
import { useAppSelector } from '@/services/redux';
import { selectToastItems } from '@/services/redux/toast';
import { Toast } from '@/components/Toast';
import { Button } from '@/components/Button';

const App: React.FC = () => {
  // test here
  const toastState = useAppSelector(selectToastItems);

  return (
    <>
      <div className={style.buttonContainer}>
        <Button type='success'>Show Toast Success</Button>
        <Button type='warning'>Show Toast Warning</Button>
        <Button type='error'>Show Toast Error</Button>
        <Button type='info'>Show Toast Info</Button>
      </div>
      <div className={style.toastContainer}>
        {
          toastState.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))
        }
      </div>
    </>
  )
};

export default App;
