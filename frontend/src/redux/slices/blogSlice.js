import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// add blog
export const addBlog = createAsyncThunk("blog/creation", async (blog) => {
    try {
        let result = await axios.post("http://localhost:5000/blog/addblog", blog)
        return result.data
    } catch (error) {
        console.log(error);
    }
});

// get all blogs
export const getBlog = createAsyncThunk("blog/get", async () => {
    try {
        let result = await axios.get("http://localhost:5000/blog/",)
        return result.data;
    } catch (error) {
        console.log(error);
    }
});

//update blog
export const updateBlog= createAsyncThunk("user/update", async ({ id, blog }) => {
    try {
        let result = await axios.put(`http://localhost:5000/blog/modifyblog/${id}`, blog)
        return result.data;
    } catch (error) {
        console.log(error);
    }
});

//delete blog
export const blogDelete = createAsyncThunk("blog/delete", async ({ id }) => {
    try {
        let result = await axios.delete(`http://localhost:5000/blog/deleteblog/${id}`)
        return result.data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    blog: null,
    status: null,
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: {
        //get all blogs
        [getBlog.pending]: (state) => {
            state.status = "loading"
        },
        [getBlog.fulfilled]: (state, action) => {
            state.status = "success";
            state.blog = action.payload.blogs;
        },
        [getBlog.rejected]: (state) => {
            state.status = "fail"
        },
        //add blog
        [addBlog.pending]: (state) => {
            state.status = "loading"
        },
        [addBlog.fulfilled]: (state, action) => {
            state.status = "success";
            state.blog = [action.payload.blog, ...state.blog];
            return state
        },
        [addBlog.rejected]: (state) => {
            state.status = "fail"
        },
        //update blog
        [updateBlog.pending]: (state) => {
            state.status = "loading"
        },
        [updateBlog.fulfilled]: (state) => {
            state.status = "success";
        },
        [updateBlog.rejected]: (state) => {
            state.status = "fail"
        },
        //delete blog
        [blogDelete.pending]: (state) => {
            state.status = "loading"
        },
        [blogDelete.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [blogDelete.rejected]: (state) => {
            state.status = "fail"
        },
    },
})

// export const { addOpinion, removeOpinion, updateOpinion, completOpinion, } = opinionSlice.actions;
export default blogSlice.reducer;