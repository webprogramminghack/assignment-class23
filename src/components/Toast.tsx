import IconCancel from '@/assets/svg/icon-close.svg';
import IconError from '@/assets/svg/icon-danger.svg';
import IconInfo from '@/assets/svg/icon-info.svg';
import IconSuccess from '@/assets/svg/icon-success.svg';
import IconWarning from '@/assets/svg/icon-warning.svg';
import { useAppDispatch } from '@/services/redux';
import React from 'react';
import { removeToast } from '../services/redux/toast/toast.slice';
import './Toast.scss';

interface ToastProps {
  id: string;
  variant: 'info' | 'success' | 'error' | 'warning';
  message: string;
  description: string;
  isActionActive: boolean;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  variant,
  message,
  description,
  isActionActive,
}) => {
  const dispatch = useAppDispatch();

  const handleRemoveToast = () => {
    dispatch(removeToast(id));
  };

  let toastAction = '';
  if (isActionActive) {
    switch (variant) {
      case 'info':
      case 'success':
        toastAction = 'View Changes';
        break;
      case 'warning':
      case 'error':
        toastAction = 'Learn More';
        break;
      default: {
        const _exhaustiveCheck: never = variant;
        throw new Error(`Unhandled type: ${_exhaustiveCheck}`);
      }
    }
  }

  const getIcon = () => {
    switch (variant) {
      case 'info':
        return <IconInfo className='toastIcon' />;
      case 'success':
        return <IconSuccess className='toastIcon' />;
      case 'warning':
        return <IconWarning className='toastIcon' />;
      case 'error':
        return <IconError className='toastIcon' />;
      default: {
        const _exhaustiveCheck: never = variant;
        throw new Error(`Unhandled type: ${_exhaustiveCheck}`);
      }
    }
  };

  return (
    <div className='toast'>
      <div className='iconWrapper'>
        {getIcon()}
        <IconCancel className='iconClose' onClick={handleRemoveToast} />
      </div>
      <div className='toastContent'>
        <h4>{message}</h4>
        <p>{description}</p>
      </div>
      <div className='toastFooter'>
        <a href='#' className='dismissLink' onClick={handleRemoveToast}>
          Dismiss
        </a>
        {isActionActive && (
          <a href='#' className='toastLink'>
            {toastAction}
          </a>
        )}
      </div>
    </div>
  );
};
