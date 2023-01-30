import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counterValue: 0,
    mode: "light",
    user: null,
    token: null,
    posts: []
}

export const authSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        }
    }
})


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counterValue++
        },
        decrement: (state) => {
            state.counterValue--
        },
        incrementByValue: (state, payload) => {
            state.counterValue += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue } = counterSlice.actions

export default counterSlice.reducer