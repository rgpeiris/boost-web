import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { AuthInfo } from '../../pages/auth/types';

const initialState: AuthInfo = {
  token: '',
  email: '',
  fullName: '',
  isAuth: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthInfo>) => ({
      ...state,
      ...action.payload,
    }),
    setAuthInitial: () => initialState,
  },
});
