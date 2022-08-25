import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = {
    access_token: "",
    logged_in: false
}

const userSlice = createSlice({
    name: "user",
    initialState: user,
    reducers: {
        login: (state, action) => {
            const {access_token} = action.payload;
            state = {access_token, logged_in: true};
        },
        logout: (state, action) => {
            state = {access_token: "", logged_in: false};
        }
    }
});

export const userActions = userSlice.actions;

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export default store;
