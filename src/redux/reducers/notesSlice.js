import { createSlice } from '@reduxjs/toolkit';
import { showSuccess } from '../../utils/helperFunctions';

// Define the initial state
const initialState = {
    title: '',
    description: '',
    titleDiscriptionDataState: []
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        titleData: (state, action) => {
            state.title = action.payload;
            console.log("titleData", action.payload)
        },
        descriptionData: (state, action) => {
            state.description = action.payload;
            console.log("descriptionData", action.payload)
        },
        titleDiscriptionData: (state, action) => {
            const notesUserData = state.titleDiscriptionDataState.push(action.payload)
            // console.log('titleDiscriptionDataState', notesUserData)
            showSuccess("saved")

        }

    },
});

export const { titleData, descriptionData, titleDiscriptionData } = notesSlice.actions;

export default notesSlice.reducer;
