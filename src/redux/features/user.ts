import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  userInfo: object;
}
const initialState: IUserState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

//
// export const { actions... } = counterSlice.actions

export default userSlice.reducer;
