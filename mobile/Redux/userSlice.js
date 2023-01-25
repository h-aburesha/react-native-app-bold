import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        updateProfilePic: (state, action) => {
            state.user.profilepicurl = action.payload;
        },
        updateUserBio: (state, action) => {
            state.user.bio = action.payload;
        },
    },
});

export const { setUser, updateProfilePic, updateUserBio } = userSlice.actions;

export default userSlice;
