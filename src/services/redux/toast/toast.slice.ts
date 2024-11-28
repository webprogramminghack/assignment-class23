import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ToastItems = {
  id: string;
  variant: 'info' | 'success' | 'error' | 'warning';
  message: string;
  description: string;
  isActionActive: boolean;
};

type ToastState = {
  items: ToastItems[];
};

const initialState: ToastState = {
  items: [],
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (
      state,
      action: PayloadAction<{
        id: string;
        variant: 'info' | 'success' | 'error' | 'warning';
        isActionActive: boolean;
      }>
    ) => {
      const { id, variant, isActionActive } = action.payload;

      // Define message and description based on the type
      let message = '';
      let description = '';

      switch (variant) {
        case 'info':
          message = 'Successfully updated profile';
          description =
            'Info lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.';
          break;
        case 'success':
          message = 'Successfully updated profile';
          description =
            'Success lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.';
          break;
        case 'warning':
          message = 'Just to let you know this might be a problem';
          description =
            'Warning lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.';
          break;
        case 'error':
          message = 'There was a problem with that action';
          description =
            'Error lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.';
          break;
        default: {
          const _exhaustiveCheck: never = variant;
          throw new Error(`Unhandled type: ${_exhaustiveCheck}`);
        }
      }

      state.items.unshift({
        id,
        variant,
        message,
        description,
        isActionActive,
      });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
