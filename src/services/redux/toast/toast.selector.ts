import { RootState } from '..';

export const selectToastItems = (state: RootState) => state.toast.items;