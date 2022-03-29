import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store';

// name of the slice in the store 
const name: string = "page";

// Defining our page slice state type 
interface pageSliceType {
    loading: boolean;
    error: boolean;
    errors: string[];
    loadingMessage: string | null;
    errorMessage: string | null;
    pageData?: any;
}

// page slice initial state
const initialState = {
    loading: true,
    error: false,
    errors: [],
    loadingMessage: null,
    errorMessage: null,
    pageData: null,
} as pageSliceType;


// The slice for the page 
const pageSlice = createSlice({
    name,
    initialState,
    reducers: {
        /**
         * resets the state in the page 
         * @param state 
         */
        reset(state): void {
            state = initialState;
        },

        /**
         * stop loading on the page
         * @param state 
         */
        stopLoading(state): void {
            state.loading = false
        },

        /**
         * set the error of the page 
         * @param state 
         */
        setError(state): void {
            state.error = true;
        },

        /**
         * sets the data needed for the page 
         * @param state 
         * @param action 
         */
        setPageData(state, action): void {
            state.pageData = action.payload;
        }
    },
})

export const pageSelector = (state: RootState) => state.page;

export const { reset, stopLoading, setError, setPageData } = pageSlice.actions;

export default pageSlice.reducer; 