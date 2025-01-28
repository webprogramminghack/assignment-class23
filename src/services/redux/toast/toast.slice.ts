import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ToastItem = {
  id: string;
  type: 'info' | 'success' | 'error' | 'warning';
  message: string;
  description: string;
  isActionActive: boolean;
};

type ToastState = {
  items: ToastItem[];
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
        type: 'info' | 'success' | 'error' | 'warning';
        isActionActive: boolean;
      }>
    ) => {
      const { id, type, isActionActive } = action.payload;

      // Define message and description based on the type
      let message = '';
      let description = '';

      switch (type) {
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
      }

      state.items.unshift({
        id,
        type,
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
