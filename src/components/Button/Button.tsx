import React from 'react';
import style from './Button.module.scss';

type ButtonProps = {
  type: 'success' | 'warning' | 'error' | 'gray';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, children }) => {
  const handleClick = () => {
    alert(`Show Toast ${type}`);
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
