import axios from '../../axios.jsx';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSneakers = createAsyncThunk(
	'sneakers/fetchSneakers',
	async () => {
		const { data } = await axios.get('/sneakers');
		return data;
	}
);

const initialState = {
	sneakers: [],
};

const sneakersSlice = createSlice({
	name: 'sneakers',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchSneakers.fulfilled, (state, action) => {
				state.sneakers = action.payload;
			})
			.addCase(fetchSneakers.rejected, state => {
				state.sneakers = [];
			});
	},
});

export const sneakersReducer = sneakersSlice.reducer;
