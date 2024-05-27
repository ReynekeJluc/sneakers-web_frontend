import axios from '../../axios.jsx';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPages = createAsyncThunk('pages/fetchPages', async () => {
	const { data } = await axios.get('/sneakers');
	return data.pages;
});

const initialState = {
	pages: [],
};

const pagesSlice = createSlice({
	name: 'pages',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchPages.fulfilled, (state, action) => {
				state.pages = action.payload;
			})
			.addCase(fetchPages.rejected, state => {
				state.pages = [];
			});
	},
});

export const pagesReducer = pagesSlice.reducer;
