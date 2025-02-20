import React from 'react';
import { ToastVariant } from '@/services/redux/toast';

type ToastProps = {
  id: string;
  variant: ToastVariant;
  message: string;
  subMessage: string;
  isActionActive: boolean;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  variant,
  message,
  subMessage,
  isActionActive
}) => {
  return (
    <>
      <div>{variant}</div>
      <div>{message}</div>
      <div>{subMessage}</div>
      <div>{isActionActive}</div>
    </>
  )
}
