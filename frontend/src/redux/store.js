import { configureStore } from '@reduxjs/toolkit'
import activitySlice from './slices/activitySlice'
import blogSlice from './slices/blogSlice'
import userSlice from './slices/userSlice'

export default configureStore({
    reducer: {
        user: userSlice,
        activity: activitySlice,
        blog: blogSlice,
    },
})