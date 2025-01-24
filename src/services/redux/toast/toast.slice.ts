import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ToastVariants = 'success' | 'warning' | 'info' | 'danger';

type ToastItems = {
  id: string;
  variant: ToastVariants;
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
    addToast: (state, action: PayloadAction<ToastItems>) => {
      state.items.unshift(action.payload);
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const {
  actions: { addToast, removeToast },
} = toastSlice;
