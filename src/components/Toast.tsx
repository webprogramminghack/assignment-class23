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
  type: 'info' | 'success' | 'error' | 'warning';
  message: string;
  description: string;
  isActionActive: boolean;
}

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  message,
  description,
  isActionActive,
}) => {
  const dispatch = useAppDispatch();

  const handleDismiss = () => {
    dispatch(removeToast(id));
  };

  let linkCaption = '';
  if (isActionActive) {
    switch (type) {
      case 'info':
        linkCaption = 'View Changes';
        break;
      case 'success':
        linkCaption = 'View Changes';
        break;
      case 'warning':
        linkCaption = 'Learn More';
        break;
      case 'error':
        linkCaption = 'Learn More';
        break;
      default:
        linkCaption = 'Unknown Action';
        break;
    }
  }

  const renderIcon = () => {
    switch (type) {
      case 'info':
        return <IconInfo className='toastIcon' />;
      case 'success':
        return <IconSuccess className='toastIcon' />;
      case 'warning':
        return <IconWarning className='toastIcon' />;
      case 'error':
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
        <p>{description}</p>
      </div>
      {/* <button onClick={handleDismiss} className='toast-dismiss'>
        &times;
      </button> */}
      <div className='toastFooter'>
        <a href='#' className='dismissLink' onClick={handleDismiss}>
          Dismiss
        </a>
        {isActionActive && (
          <a href='#' className='toastLink'>
            {linkCaption}
          </a>
        )}
      </div>
    </div>
  );
};

export default Toast;
