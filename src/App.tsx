import React from 'react';
import style from './App.module.scss';
import { useAppSelector } from '@/services/redux';
import { selectToastItems } from '@/services/redux/toast';
import { Toast } from '@/components/Toast';
import { Button } from '@/components/Button';

const App: React.FC = () => {
  // test here
  const toastState = useAppSelector(selectToastItems);
  const subMessage = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquid pariatur, ipsum dolor.';

  return (
    <>
      <div className={style.buttonContainer}>
        <Button
          type='success'
          message='Successfully updated profile'
          subMessage={subMessage}
          isActionActive={true}
        >
          Show Toast Success with Action
        </Button>
        <Button
          type='warning'
          message='Just to let you know this might be a problem'
          subMessage={subMessage}
          isActionActive={false}
        >
          Show Toast Warning
        </Button>
        <Button
          type='error'
          message='There was a problem with that action'
          subMessage={subMessage}
          isActionActive={true}
        >
          Show Toast Error with Action
        </Button>
        <Button
          type='info'
          message='Just a quick update for you'
          subMessage={subMessage}
          isActionActive={false}
        >
          Show Toast Info
        </Button>
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
