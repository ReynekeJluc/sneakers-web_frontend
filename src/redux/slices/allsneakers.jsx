import axios from '../../axios.jsx';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllSneakers = createAsyncThunk(
	'sneakers/fetchAllSneakers',
	async () => {
		const { data } = await axios.get('/sneakers_all');
		return data;
	}
);

const initialState = {
	sneakers: [],
};

const sneakersSlice = createSlice({
	name: 'all_sneakers',
	initialState,
	reducers: {
		setSneakers(state, action) {
			state.sneakers = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			// получение кроссовок
			.addCase(fetchAllSneakers.fulfilled, (state, action) => {
				state.sneakers = action.payload.data;
			})
			.addCase(fetchAllSneakers.rejected, state => {
				state.sneakers = [];
			});
	},
});

export const allSneakersReducer = sneakersSlice.reducer;
export const { setAllSneakers } = sneakersSlice.actions;
