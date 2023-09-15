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
            // const { index } = action.payload
            // console.log('titleDiscriptionDataState', index)
            showSuccess("saved")
        },
        deleteMethod: (state, action) => {
            const deleteElement = state.titleDiscriptionDataState
            // console.log("<>",deleteElement,action.payload)
            deleteElement.splice(action.payload, 1)
        },

        updateMethod: (state, action) => {
            const updateElement = state.titleDiscriptionDataState
            const { index, titleObj, descriptionObj } = action.payload
            const indexToUpdate = index

            if (indexToUpdate) {
                if (indexToUpdate >= 0 && indexToUpdate < state.titleDiscriptionDataState.length) {
                    // Define the new data to update with
                    let newData = {
                        titleObj: titleObj, // New name
                        descriptionObj: descriptionObj, // Keep the previous
                        // descriptionObj: state.titleDiscriptionDataState[indexToUpdate].age, // Keep the previous
                        // You can add more key-value pairs here as needed
                    };

                    // Update the element at the specified index with the merged data
                    const c = state.titleDiscriptionDataState[indexToUpdate] = newData;
                    console.log("Updated Array", c)
                } else {
                    console.error("Index is out of bounds.");
                }
            } else {
                console.error("No Index Available to update .");

            }
        },

    },
});

export const { titleData, descriptionData, titleDiscriptionData, deleteMethod, updateMethod } = notesSlice.actions;

export default notesSlice.reducer;
