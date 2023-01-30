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
        incrementByValue: (state, action) => {
            state.counterValue += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue } = counterSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByValue(amount))
    }, 1000)
}

export const selectCount = (state) => state.counter.value

export default counterSlice.reducer