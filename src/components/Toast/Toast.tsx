import React from 'react';
import style from './Toast.module.scss';
import { ToastVariant } from '@/services/redux/toast';
import { useToast } from '@/hooks/useToast';
import IconClose from '@/assets/svg/icon-close.svg';
import IconDanger from '@/assets/svg/icon-danger.svg'; 
import IconInfo from '@/assets/svg/icon-info.svg'; 
import IconSuccess from '@/assets/svg/icon-success.svg'; 
import IconWarning from '@/assets/svg/icon-warning.svg'; 

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
  const { removeToast } = useToast();

  const handleDismiss = (id: string) => {
    removeToast(id);
  };

  let actionCaption = '';
  if (isActionActive) {
    switch (variant) {
      case 'success':
      case 'info': actionCaption = 'View Changes'; break;
      case 'warning':
      case 'error': actionCaption = 'Learn More'; break;
    }
  }

  const getIcon: React.FC<ToastVariant> = (variant) => {
    switch (variant) {
      case 'success': return <IconSuccess />;
      case 'warning': return <IconWarning />;
      case 'error': return <IconDanger />;
      case 'info': return <IconInfo />;
      default: {
        const _exhaustiveCheck: never = variant;
        throw new Error(`Unhandled variant: ${_exhaustiveCheck}`);
      }
    }
  }

  return (
    <div className={style.toast}>
      <div className={style.toastHeader}>
        {getIcon(variant)}
        <IconClose onClick={() => handleDismiss(id)}/>
      </div>
      <div className={style.toastContent}>
        <p className={style.toastMessage}>{message}</p>
        <p className={style.toastSubMessage}>{subMessage}</p>
      </div>
      <div className={style.toastFooter}>
        <p
          className={style.dissmiss}
          onClick={() => handleDismiss(id)}
        >
          Dismiss
        </p>
        {
          isActionActive &&
          <p
            className={style.action}
            onClick={() => alert(actionCaption)}
          >
            {actionCaption}
          </p>
        }
      </div>
    </div>
  )
}
