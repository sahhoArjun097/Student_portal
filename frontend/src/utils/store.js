import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./slices/authSlice";  // Example reducer
// import taskSlice from "./slices/taskSlice";  // Example reducer

const Store = configureStore({
  reducer: {
    // auth: authSlice,
    // task: taskSlice,
  },
});

export default Store;
