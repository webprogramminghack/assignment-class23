import { useAppDispatch } from '@/services/redux';
import {
  addToast as addToastAction,
  removeToast as removeToastAction,
  Toast as ToastType,
} from '@/services/redux/toast';
import { useCallback } from 'react';
import { off, on } from '@/libs/eventBus';

export const useToast = () => {
  const dispatch = useAppDispatch();

  const addToast = useCallback((toast: ToastType, onAction: () => void = () => {}) => {
    dispatch(addToastAction(toast));
    on(toast.id, onAction);
    setTimeout(() => {
      dispatch(removeToastAction(toast.id));
      off(toast.id);
    }, 5000);
  }, [dispatch]);

  const removeToast = useCallback((id: string) => {
    dispatch(removeToastAction(id));
    off(id);
  }, [dispatch]);

  return {
    addToast,
    removeToast,
  }
};
