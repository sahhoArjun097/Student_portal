import { createSlice } from "@reduxjs/toolkit";
const  authSlice = createSlice({
   name : "user",
   initialState :{
      // User: null,
      userData:JSON.parse(localStorage.getItem("userData")) || null
   },
   reducers:{
      addUser : (state,action)=>{
         // state.User = action.payload;
         state.userData = action.payload
         localStorage.setItem("userData",JSON.stringify(action.payload))
      },
      removeUser:(state)=>{
         state.userData = null
         localStorage.removeItem("userData")
      }
   }
})
export const { addUser, removeUser } = authSlice.actions
export default authSlice.reducer