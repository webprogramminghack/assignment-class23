import React from 'react';
import { useAppDispatch } from '@/services/redux';
import { addToast } from '../services/redux/toast/toast.slice';
import { v4 as uuidv4 } from 'uuid';
import styles from './ToastButton.module.scss';

const ToastButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const showToast = (
    type: 'info' | 'success' | 'error' | 'warning',
    isActionActive: boolean
  ) => {
    dispatch(
      addToast({
        id: uuidv4(),
        type,
        isActionActive,
      })
    );
  };

  return (
    <div>
      <button onClick={() => showToast('info', true)} className={styles.button}>
        Show Info Toast
      </button>
      <button
        onClick={() => showToast('success', false)}
        className={styles.button}
      >
        Show Success Toast
      </button>
      <button
        onClick={() => showToast('error', true)}
        className={styles.button}
      >
        Show Error Toast
      </button>
      <button
        onClick={() => showToast('warning', false)}
        className={styles.button}
      >
        Show Warning Toast
      </button>
    </div>
  );
};

export default ToastButton;
