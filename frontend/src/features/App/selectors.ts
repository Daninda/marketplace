import { TRootState } from '@store/index';

export const selectIsLogged = (state: TRootState) => state.app.isLogged;
export const selectIsLoading = (state: TRootState) => state.app.isLoading;
