import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
};

const counterReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;
        },
        addCounter(state, action: PayloadAction<number>) {
            const { payload } = action;

            state.counter += payload;
        },
    },
});
export const { increment, decrement, addCounter } = counterReducer.actions;

export default counterReducer.reducer;
