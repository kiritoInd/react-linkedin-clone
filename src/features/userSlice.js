import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: "user",
  initialState:{
    user: "user",

  },
  reducers: {
    login: (state,action) => {
      state.value += action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  
  },

});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;


//we use redux to over come problem of propdrilling