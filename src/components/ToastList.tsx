// src/components/ToastList.tsx
import React from 'react';
import { useAppSelector } from '@/services/redux';
import { toastSelectorItems } from '@/services/redux/toast/toast.selectors';
import Toast from './Toast';
import './ToastList.scss';

export const ToastList: React.FC = () => {
  const toasts = useAppSelector(toastSelectorItems);

  return (
    <div className='toast-list'>
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastList;
