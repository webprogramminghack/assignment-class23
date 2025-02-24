import React from 'react';
import style from './Button.module.scss';
import { ToastVariant } from '@/services/redux/toast';
import { v4 as uuid } from 'uuid';
import { useToast } from '@/hooks/useToast';

type ButtonProps = {
  type: ToastVariant;
  message: string;
  subMessage: string;
  isActionActive: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  message,
  subMessage,
  isActionActive,
  children
}) => {
  const { addToast } = useToast();
  const payload = {
    id: uuid(),
    variant: type,
    message,
    subMessage,
    isActionActive,
  }
  
  const handleClick = () => {
    addToast(payload);
  }

  return (
    <button
      className={style.button}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
