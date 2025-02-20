import React from 'react';
import style from './Button.module.scss';
import { ToastVariant } from '@/services/redux/toast';
import { v4 as uuid } from 'uuid';
import { useToast } from '@/hooks/useToast';

type ButtonProps = {
  type: ToastVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, children }) => {
  const { addToast } = useToast();
  
  const handleClick = () => {
    alert(`Show Toast ${type}`);
    addToast({
      id: uuid(),
      variant: type,
      message: 'message',
      subMessage: 'subMessage',
      isActionActive: false,
    });
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
