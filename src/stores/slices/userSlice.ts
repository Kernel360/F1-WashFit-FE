import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
}

const initialState: UserState = {
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string | null>) => {
      return {
        ...state,
        id: action.payload,
      };
    },
    clearUserId: (state) => {
      return {
        ...state,
        id: null,
      };
    },
  },
});

export const { setUserId, clearUserId } = userSlice.actions;

export default userSlice.reducer;
