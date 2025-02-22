import React from 'react';
import { useAppDispatch } from '@/services/redux';
import { addToast } from '../services/redux/toast/toast.slice';
import { v4 as uuid } from 'uuid';
import styles from './ToastButton.module.scss';

const ToastButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const onClickToastInfo = () => {
    dispatch(
      addToast({
        id: uuid(),
        variants: 'info',
        message: 'Just a quick update for you',
        subMessage:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
        isActionActive: true,
        onActionMessage: 'Learn More',
      })
    );
  };

  const onClickToastSuccess = () => {
    dispatch(
      addToast({
        id: uuid(),
        variants: 'success',
        message: 'Successfully updated profile',
        subMessage:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
        isActionActive: false,
      })
    );
  };

  const onClickToastDanger = () => {
    dispatch(
      addToast({
        id: uuid(),
        variants: 'danger',
        message: 'There was a problem with that action',
        subMessage:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
        isActionActive: false,
      })
    );
  };

  const onClickToastWarning = () => {
    dispatch(
      addToast({
        id: uuid(),
        variants: 'warning',
        message: 'Just to let you know this might be a problem',
        subMessage:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
        isActionActive: true,
        onActionMessage: 'Learn More',
      })
    );
  };

  return (
    <div>
      <button onClick={onClickToastInfo} className={styles.button}>
        Show Info Toast
      </button>
      <button onClick={onClickToastSuccess} className={styles.button}>
        Show Success Toast
      </button>
      <button onClick={onClickToastDanger} className={styles.button}>
        Show Error Toast
      </button>
      <button onClick={onClickToastWarning} className={styles.button}>
        Show Warning Toast
      </button>
    </div>
  );
};

export default ToastButton;
