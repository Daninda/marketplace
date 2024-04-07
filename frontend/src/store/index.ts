import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const store = configureStore({
  reducer: reducers,
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export default store;
