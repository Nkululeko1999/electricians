import { createSlice } from "@reduxjs/toolkit";

// create initial state
const initialState = {
    info: null,
    message: null,
    error: null,
    loading: false,
};

// create a slice
const infoSlice = createSlice({
    name: 'info',
    initialState,

    reducers: {
        transactionStart: (state) => {
            state.loading = true;
        },

        transactionFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        transactionSuccess: (state, action) => {
            state.message = action.payload;
            state.error = null;
            state.loading = false;
        },

        saveInfo: (state, action) => {
            state.info = action.payload;
            state.loading = true;
        },

        resetLoading: (state) => {
            state.loading = false;
        },

        resetError: (state) => {
            state.error = null;
        }

    }
});

const infoReducer = infoSlice.reducer;

export default infoReducer;

export const {
    transactionStart,
    transactionFailure,
    transactionSuccess,
    resetError,
    saveInfo,
    resetLoading
} = infoSlice.actions;