import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addToast as addToastAction } from '../services/redux/toast/toast.slice';

export const useToast = () => {
  const dispatch = useDispatch();

  const addToast = (
    variant: 'success' | 'warning' | 'danger',
    message: string,
    description: string,
    isActionActive: boolean = true
  ) => {
    dispatch(
      addToastAction({
        id: uuid(),
        variant,
        message,
        description,
        isActionActive,
      })
    );
  };

  return { addToast };
};
