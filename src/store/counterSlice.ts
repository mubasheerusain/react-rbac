import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type counter = {
    value: number
}

const initialState: counter = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementBy: (state, action) => { state.value += action.payload }
    },
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload
        })
    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { increment, decrement, incrementBy } = counterSlice.actions; 
export default counterSlice.reducer;
