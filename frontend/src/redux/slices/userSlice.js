import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// User Register
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/register", user)
    return result.data
  } catch (error) {
    console.log(error);
  }
});


//User login
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let result = await axios.post("http://localhost:5000/user/login", user);
    // console.log(result.data)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

// current user
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    return result.data;
  } catch (error) {
    console.log(error);
  }
});
// all users
export const allUsers = createAsyncThunk("user/all", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/all",)
    return result.data.users;
  } catch (error) {
    console.log(error);
  }
});

//update User
export const updateUser = createAsyncThunk("user/update", async ({ id, user }) => {
  try {
    let result = await axios.put(`http://localhost:5000/user/modify/${id}`, user)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

//Delete User
export const deleteUser = createAsyncThunk("user/delete", async ({ id }) => {
  try {
    let result = await axios.delete(`http://localhost:5000/user/deleteuser/${id}`)
    return result.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  status: null,
  users: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    // // register user
    [userRegister.pending]: (state) => {
      state.status = "loading";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      return state;
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    // user login
    [userLogin.pending]: (state) => {
      state.status = "loading";
    },
    [userLogin.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = "success";
      state.user = action.payload?.user;
      localStorage.setItem("token", action.payload.token);
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },

    //current user
    [userCurrent.pending]: (state) => {
      state.status = "loading"
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload?.user;
      return state;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail"
    },
    // update user
    [updateUser.pending]: (state) => {
      state.status = "loading"
    },
    [updateUser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updateUser.rejected]: (state) => {
      state.status = "fail"
    },
    //delete user
    [deleteUser.pending]: (state) => {
      state.status = "loading"
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteUser.rejected]: (state) => {
      state.status = "fail"
    },
    //all users
    [allUsers.pending]: (state) => {
      state.status = "loading"
    },
    [allUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload
    },
    [allUsers.rejected]: (state) => {
      state.status = "fail"
    },
  },
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;