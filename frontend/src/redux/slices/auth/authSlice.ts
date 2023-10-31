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
        setCredials: (state, action: PayloadAction<any>) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
            state.userInfo = JSON.parse(action?.payload);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            localStorage.setItem("userInfo", JSON.stringify(JSON.parse(action?.payload)));
        },
        logout: (state) => {
            state.userInfo = null;
            localStorage.clear();
        },
    },
});

export const { setCredials } = authSlice.actions;
export default authSlice.reducer;