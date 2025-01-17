import { FC } from 'react';
import style from './Header.module.scss';
import IconClose from '@/assets/svg/icon-close.svg';
import IconSuccess from '@/assets/svg/icon-success.svg';
import IconInfo from '@/assets/svg/icon-info.svg';
import IconWarning from '@/assets/svg/icon-warning.svg';
import IconDanger from '@/assets/svg/icon-danger.svg';
import { ToastVariants } from '@/services/redux/toast';

type HeaderType = {
  variant?: ToastVariants
  onExit?: () => void
};

const getIcon: FC<ToastVariants> = (variant) => {
  switch (variant) {
    case 'success':
      return <IconSuccess/>
    case 'info':
      return <IconInfo/>
    case 'danger':
      return <IconDanger/>
    case 'warning':
      return <IconWarning/>
    default: {
      const _exhaustiveCheck: never = variant;
      throw new Error(`Unhandled type: ${_exhaustiveCheck}`);
    }
  }
};

export const Header: FC<HeaderType> = ({ variant = 'info' , onExit }) => {
  return <div className={style.header}>
    {getIcon(variant)}
    <IconClose onClick={onExit}/>
  </div>;
};
