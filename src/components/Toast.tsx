import IconCancel from '@/assets/svg/icon-close.svg';
import IconError from '@/assets/svg/icon-danger.svg';
import IconInfo from '@/assets/svg/icon-info.svg';
import IconSuccess from '@/assets/svg/icon-success.svg';
import IconWarning from '@/assets/svg/icon-warning.svg';
import { useAppDispatch } from '@/services/redux';
import React from 'react';
import { removeToast } from '../services/redux/toast/toast.slice';
import styles from './Toast.module.scss';

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
        return <IconInfo className={styles.toastIcon} />;
      case 'success':
        return <IconSuccess className={styles.toastIcon} />;
      case 'warning':
        return <IconWarning className={styles.toastIcon} />;
      case 'error':
        return <IconError className={styles.toastIcon} />;
      default: {
        const _exhaustiveCheck: never = variant;
        throw new Error(`Unhandled type: ${_exhaustiveCheck}`);
      }
    }
  };

  return (
    <div className={styles.toast}>
      <div className={styles.iconWrapper}>
        {getIcon()}
        <IconCancel className={styles.iconClose} onClick={handleRemoveToast} />
      </div>
      <div className={styles.toastContent}>
        <h4>{message}</h4>
        <p>{description}</p>
      </div>
      <div className={styles.toastFooter}>
        <a href='#' className={styles.dismissLink} onClick={handleRemoveToast}>
          Dismiss
        </a>
        {isActionActive && (
          <a href='#' className={styles.toastLink}>
            {toastAction}
          </a>
        )}
      </div>
    </div>
  );
};
