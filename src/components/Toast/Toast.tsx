import { FC, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import style from './Toast.module.scss';
import { Item } from './Item';
import { useAppDispatch, useAppSelector } from '@/services/redux';
import { removeToast, selectToastItems } from '@/services/redux/toast';
import { emit } from '@/libs/eventBus';

export const Toast: FC = () => {
  const toast = useAppSelector(selectToastItems);
  const dispatch = useAppDispatch();

  if (!toast.length) return null;

  return createPortal(
    <div className={style.wrapper}>
      {toast.map((items) => (
        <Item key={items.id}>
          <Item.Header
            variant={items.variants}
            onExit={() => dispatch(removeToast(items.id))}
          />
          <Item.Body
            dataId={items.id}
            message={items.message}
            subMessage={items.subMessage}
            onActionMessage={items.onActionMessage}
            onExit={() => dispatch(removeToast(items.id))}
          />
        </Item>
      ))}
    </div>,
    document.getElementById('portal') as HTMLElement
  );
};
