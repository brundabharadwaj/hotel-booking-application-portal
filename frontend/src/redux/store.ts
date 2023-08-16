import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './auth';
import searchReducer from './search';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
