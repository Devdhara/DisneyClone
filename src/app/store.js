/** @format */

import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/Movie/movieSlice';
export const store = configureStore({
	reducer: {
		movie: movieReducer,
	},
});
