import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
    userInfo: string | null;
}

const initialState: AuthState = {
    userInfo: JSON.parse(localStorage.getItem("userInfo") || "null") as string | null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredials: (state, action: PayloadAction<string>) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));

        }
    },
});

export const { setCredials } = authSlice.actions;
export default authSlice.reducer;