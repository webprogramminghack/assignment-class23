import { Toast } from '@/components/Toast';
import { useAppSelector } from '@/services/redux';
import { toastSelectorItems } from '@/services/redux/toast';
import React from 'react';
import styles from './ToastList.module.scss';

export const ToastList: React.FC = () => {
  const toasts = useAppSelector(toastSelectorItems);

  return (
    <div className={styles.toastList}>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};
