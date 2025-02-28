import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
// import authSlice from "./slices/authSlice";  // Example reducer
// import taskSlice from "./slices/taskSlice";  // Example reducer

const Store = configureStore({
  reducer: {
    authSlice
    // task: taskSlice,
  },
});

export default Store;
