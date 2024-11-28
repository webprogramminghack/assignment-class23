import { useAppDispatch } from '@/services/redux';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { addToast } from '../services/redux/toast/toast.slice';
import styles from './ToastButton.module.scss';

export const ToastButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const showToast = (
    variant: 'info' | 'success' | 'error' | 'warning',
    isActionActive: boolean
  ) => {
    dispatch(
      addToast({
        id: uuid(),
        variant,
        isActionActive,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <p>With Action</p>
        <button
          onClick={() => showToast('info', true)}
          className={styles.button}
        >
          Show Info Toast
        </button>
        <button
          onClick={() => showToast('success', true)}
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
          onClick={() => showToast('warning', true)}
          className={styles.button}
        >
          Show Warning Toast
        </button>
      </div>
      <div className={styles.buttonWrapper}>
        <p>Without Action</p>
        <button
          onClick={() => showToast('info', false)}
          className={styles.button}
        >
          Show Info Toast
        </button>
        <button
          onClick={() => showToast('success', false)}
          className={styles.button}
        >
          Show Success Toast
        </button>
        <button
          onClick={() => showToast('error', false)}
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
    </div>
  );
};
