import { useAppDispatch } from '@/services/redux';
import {
  addToast as addToastAction,
  removeToast as removeToastAction,
  ToastItem
} from '@/services/redux/toast';

export const useToast = () => {
  const dispatch = useAppDispatch();

  const addToast = (toast: ToastItem) => {
    dispatch(addToastAction(toast));
  };

  const removeToast = (id: string) => {
    dispatch(removeToastAction(id));
  };

  return { addToast, removeToast };
};