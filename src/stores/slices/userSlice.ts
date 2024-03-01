import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  email: string | null;
}

const initialState: UserState = {
  id: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
      };
    },
    clearUserId: (state) => {
      return {
        ...state,
        id: null,
        email: null,
      };
    },
  },
});

export const { setUserId, clearUserId } = userSlice.actions;

export default userSlice.reducer;
