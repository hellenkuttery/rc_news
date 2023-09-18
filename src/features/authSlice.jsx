import { createSlice } from '@reduxjs/toolkit';

const initialState={
    user:"",
}

export const authSlice=createSlice({
name:"auth",
initialState,
reducers:{
    // setUser:function(state,action) {

    // }
    setUser:(state,action)=>{
        state.user=action.payload
     

    },
    clearUser:(state)=>{
        state.user=""
    }    
}
})

export const {setUser,clearUser} =authSlice.actions
export default authSlice.reducer