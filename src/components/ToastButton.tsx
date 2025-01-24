import React from 'react';
import { v4 as uuid } from 'uuid';
import styles from './ToastButton.module.scss';
import { addToast } from '@/services/redux/toast';

export const ToastButton: React.FC = () => {
  // const dispatch = useAppDispatch(); perbaiki ini tugasnya bikin use toast
  // const { addToast } = useToast();

  const onClickToastSuccess = () => {
    addToast({
      id: uuid(),
      variant: 'success',
      message: 'Successfully updated profile',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
      isActionActive: true,
    });
  };
  const onClickToastWarning = () => {
    addToast({
      id: uuid(),
      variant: 'warning',
      message: 'Just to let you know this might be a problem',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
      isActionActive: true,
    });
  };
  const onClickToastDanger = () => {
    addToast({
      id: uuid(),
      variant: 'danger',
      message: 'There was a problem with that action',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.',
      isActionActive: true,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <p>With Action</p>
        <button onClick={onClickToastSuccess}>Show Info Toast</button>
        <button onClick={onClickToastDanger}>Show Success Toast</button>
        <button onClick={onClickToastWarning}>Show Error Toast</button>
      </div>
      {/* {<div className={styles.buttonWrapper}>
        <p>Without Action</p>
        <button onClick={() => showToast('info', false)}>
          Show Info Toast
        </button>
        <button onClick={() => showToast('success', false)}>
          Show Success Toast
        </button>
        <button onClick={() => showToast('error', false)}>
          Show Error Toast
        </button>
        <button onClick={() => showToast('warning', false)}>
          Show Warning Toast
        </button>
      </div>} */}
    </div>
  );
};
