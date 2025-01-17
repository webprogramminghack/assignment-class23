import { FC, MouseEvent } from 'react';
import style from './Body.module.scss';
import { Toast } from '@/services/redux/toast';
import { emit } from '@/libs/eventBus';

type BodyType = Pick<Toast, 'message' | 'subMessage' | 'onActionMessage'> & {
  dataId: string
  onExit: () => void,
}

export const Body: FC<BodyType> = ({ message, subMessage, onExit, dataId, onActionMessage}) => {
  const onAction = () => {
    if (dataId) {
      emit(dataId);
    }
  }
  return (
    <div className={style.body}>
      <div className={style.content}>
        <p className={style.message}>{message}</p>
        <p className={style.subMessage}>{subMessage}</p>
      </div>
      <div className={style.action}>
        <p onClick={onExit} className={style.close}>Dismiss</p>
        {!!onActionMessage && <p className={style.actionMessage} onClick={onAction}>{onActionMessage}</p>}
      </div>
    </div>
  );
};
