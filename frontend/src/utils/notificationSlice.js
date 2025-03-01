import {createSlice} from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name  : "notification",
    initialState:{
        notification : null
    },
    reducers:{
        adduser:(state,action)=>{
            state.notification:action.play

        }

    }


})