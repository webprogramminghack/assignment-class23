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
        <button onClick={() => showToast('info', true)}>Show Info Toast</button>
        <button onClick={() => showToast('success', true)}>
          Show Success Toast
        </button>
        <button onClick={() => showToast('error', true)}>
          Show Error Toast
        </button>
        <button onClick={() => showToast('warning', true)}>
          Show Warning Toast
        </button>
      </div>
      <div className={styles.buttonWrapper}>
        <p>Without Action</p>
        <button onClick={() => showToast('info', false)}>
          Show Info Toast
        </button>
        <button onClick={() => showToast('success', false)}>
          Show Success Toast
        </button>
        <button onClick={() => showToast('error', false)}>
          Show Error Toast
        </button>
        <button onClick={() => showToast('warning', false)}>
          Show Warning Toast
        </button>
      </div>
    </div>
  );
};
