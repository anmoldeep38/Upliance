import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const initialState: UserState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    generateUserId: (state) => {
      state.id = "USR-" + Math.floor(Math.random() * 10000);
    },
  },
});

export const { updateUser, generateUserId } = userSlice.actions;
export default userSlice.reducer;
