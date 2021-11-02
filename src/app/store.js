import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features1/user/userSlice";
import movieReducer from "../features1/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});