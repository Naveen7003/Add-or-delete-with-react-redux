import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const userSlice = createSlice({
    name: "user",
    initialState:[],
    reducers: {
        addUser : (state, action) => {
            const { name, email, contact } = action.payload;
            const id = nanoid();
            state.push({ id, name, email, contact });
        },
        deleteUser: (state, action) => {
            const userId = action.payload;
            return state.filter(user => user.id !== userId);
        }
    },
});

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
