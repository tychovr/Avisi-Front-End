import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    uid: 0,
    username: "",
  },
  reducers: {
    editAccountDetails: (state, payload: any) => {
      state.uid = payload.uid;
      state.username = payload.username;
    },
  },
});

export const { editAccountDetails } = accountSlice.actions;
export const selectAccount = (state: any) => state.account.value;
export default accountSlice.reducer;
