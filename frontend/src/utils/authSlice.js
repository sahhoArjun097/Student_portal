const  authSlice = createSlice({
   name : "user",
   initialState :{
      userData:JSON.parse(localStorage.getItem("userData")) || null
   }
})