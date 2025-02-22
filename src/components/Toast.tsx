// Toast.tsx
import React from 'react';
import { useAppDispatch } from '@/services/redux';
import { removeToast } from '../services/redux/toast/toast.slice';
import IconCancel from '@/assets/svg/icon-close.svg';
import IconInfo from '@/assets/svg/icon-info.svg';
import IconSuccess from '@/assets/svg/icon-success.svg';
import IconWarning from '@/assets/svg/icon-warning.svg';
import IconError from '@/assets/svg/icon-danger.svg';
import './Toast.scss';

interface ToastProps {
  id: string;
  variants: 'info' | 'success' | 'danger' | 'warning';
  message: string;
  subMessage: string;
  isActionActive: boolean;
  onActionMessage?: string;
}

const Toast: React.FC<ToastProps> = ({
  id,
  variants,
  message,
  subMessage,
  isActionActive,
  onActionMessage,
}) => {
  const dispatch = useAppDispatch();

  const handleDismiss = () => {
    dispatch(removeToast(id));
  };

  const renderIcon = () => {
    switch (variants) {
      case 'info':
        return <IconInfo className='toastIcon' />;
      case 'success':
        return <IconSuccess className='toastIcon' />;
      case 'warning':
        return <IconWarning className='toastIcon' />;
      case 'danger':
        return <IconError className='toastIcon' />;
      default:
        return null;
    }
  };

  return (
    <div className='toast'>
      <div className='iconWrapper'>
        {renderIcon()}
        <IconCancel className='iconClose' onClick={handleDismiss} />
      </div>
      <div className='toastContent'>
        <h4>{message}</h4>
        <p>{subMessage}</p>
      </div>
      <div className='toastFooter'>
        <a href='#' className='dismissLink' onClick={handleDismiss}>
          Dismiss
        </a>
        {isActionActive && onActionMessage && (
          <a href='#' className='toastLink'>
            {onActionMessage}
          </a>
        )}
      </div>
    </div>
  );
};

export default Toast;
