import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export type ToastItem = {
  id: string;
  variant: ToastVariant;
  message: string;
  subMessage: string;
  isActionActive: boolean;
}

type ToastState = {
  items: ToastItem[];
}

const initialState: ToastState = {
  items: [],
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<ToastItem>) => {
      state.items.unshift(action.payload);
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;