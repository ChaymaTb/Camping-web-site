import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// all activities
export const getActivity = createAsyncThunk("activity/current", async () => {
    try {
        let result = await axios.get("http://localhost:5000/activity/", )
        return result.data;
    } catch (error) {
        console.log(error);
    }
});

//add new activity
export const addActivity = createAsyncThunk("activity/new", async (activity) => {
    try {
        let result = await axios.post("http://localhost:5000/activity/addactivity", activity)
        return result.data
    } catch (error) {
        console.log(error);
    }
});

// update activity
export const updateActivity= createAsyncThunk("activity/update", async ({ id, activity }) => {
    try {
        let result = await axios.put(`http://localhost:5000/activity/modifyactivity/${id}`, activity)
        return result.data;
    } catch (error) {
        console.log(error);
    }
});

//delete activity
export const deleteActivity = createAsyncThunk("blog/delete", async ({ id }) => {
    try {
        let result = await axios.delete(`http://localhost:5000/activity/delete/${id}`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    activity: null,
    status: null,
};

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {},
    extraReducers: {
        //all activities
        [getActivity.pending]: (state) => {
            state.status = "loading"
        },
        [getActivity.fulfilled]: (state, action) => {
            state.status = "success";
            state.activity = action.payload.activities;
        },
        [getActivity.rejected]: (state) => {
            state.status = "fail"
        },
        // add new activity
        [addActivity.pending]: (state) => {
            state.status = "loading"
        },
        [addActivity.fulfilled]: (state, action) => {
            state.status = "success";
            state.activity = [action.payload.activity, ...state.activity];
            return state
        },
        [addActivity.rejected]: (state) => {
            state.status = "fail"
        },
        //update activity
        [updateActivity.pending]: (state) => {
            state.status = "loading"
        },
        [updateActivity.fulfilled]: (state) => {
            state.status = "success";
        },
        [updateActivity.rejected]: (state) => {
            state.status = "fail"
        },
        //delete activity
        [deleteActivity.pending]: (state) => {
            state.status = "loading"
        },
        [deleteActivity.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [deleteActivity.rejected]: (state) => {
            state.status = "fail"
        },
    },
})

// export const { addOpinion, removeOpinion, updateOpinion, completOpinion, } = opinionSlice.actions;
export default activitySlice.reducer;