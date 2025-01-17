import React from 'react';
import style from './App.module.scss';
import { useToast } from './hooks/useToast';
import { v4 as uuid } from 'uuid';

const App: React.FC = () => {
  // test here
  const showAlert = () => {
    alert('Hello everyone!');
  }
  const { addToast } = useToast();
  const onClickToastInfo = () => {
    addToast({
      id: uuid(),
      variants: 'info',
      message: 'Just a quick update for you',
      subMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
      onActionMessage: 'Learn More',
    }, showAlert);
  }

  const onClickToastSuccess = () => {
    addToast({
      id: uuid(),
      variants: 'success',
      message: 'Successfully updated profile',
      subMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.'
    })
  }

  const onClickToastWarning = () => {
    addToast({
      id: uuid(),
      variants: 'warning',
      message: 'Just to let you know this might be a problem',
      subMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.'
    })
  }

  const onClickToastDanger = () => {
    addToast({
      id: uuid(),
      variants: 'danger',
      message: 'There was a problem with that action',
      subMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.'
    })
  }


  return <div className={style.container}>
    {/* <Toast /> */}
    <button className={style.button} onClick={onClickToastInfo}>Show Toast Info with Action</button>
    <button className={style.button} onClick={onClickToastSuccess}>Show Toast Success</button>
    <button className={style.button} onClick={onClickToastWarning}>Show Toast Warning</button>
    <button className={style.button} onClick={onClickToastDanger}>Show Toast Danger</button>
  </div>;
};

export default App;
