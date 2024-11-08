import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ToastVariants = 'success' | 'warning' | 'info' | 'danger';

export type Toast = {
  id: string
  variants: ToastVariants
  message: string
  subMessage: string
  onActionMessage?: string
}

type ToastState = {
  items: Toast[]
}

const initialState: ToastState = {
  items: [],
}

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
      state.items.unshift(action.payload)
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  }
})

export const { addToast, removeToast } = toastSlice.actions;