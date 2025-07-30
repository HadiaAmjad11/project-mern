import { createSlice, current } from "@reduxjs/toolkit";
import { FaTruckLoading } from "react-icons/fa";
import SignIn from "../../pages/Signin";

const initialState = {
    currentUser: null,
    error: null,
    Loading: false,
    
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
     signInStart: (state) => {
        state.Loading = true;
     
    
},
SignInSuccess: (state, action) =>{
    state.currentUser = action.payload;
    state.Loading = false;
    state.error = null;
},
SignInFailure: (state, action) => {
state.error = action.payload;
state.Loading = false;
}
    }
});

export const { signInStart, SignInSuccess, SignInFailure } = userSlice.actions;

export default userSlice.reducer;