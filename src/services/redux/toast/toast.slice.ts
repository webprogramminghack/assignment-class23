// redux/toast/toast.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ToastItem = {
  id: string;
  variants: 'info' | 'success' | 'danger' | 'warning';
  message: string;
  subMessage: string;
  isActionActive: boolean;
  onActionMessage?: string;
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
        variants: 'info' | 'success' | 'danger' | 'warning';
        message: string;
        subMessage: string;
        isActionActive: boolean;
        onActionMessage?: string;
      }>
    ) => {
      state.items.unshift(action.payload);
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
