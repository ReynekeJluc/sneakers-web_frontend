import axios from '../../axios.jsx';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSneakers = createAsyncThunk(
	'sneakers/fetchSneakers',
	async () => {
		const { data } = await axios.get('/sneakers');
		return data;
	}
);

export const fetchRemoveSneakers = createAsyncThunk(
	'sneakers/fetchRemoveSneakers',
	async id => {
		await axios.delete(`/sneakers/${id}`);
	}
);

const initialState = {
	sneakers: [],
};

const sneakersSlice = createSlice({
	name: 'sneakers',
	initialState,
	reducers: {
		setSneakers(state, action) {
			state.sneakers = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			// получение кроссовок
			.addCase(fetchSneakers.fulfilled, (state, action) => {
				state.sneakers = action.payload.data;
			})
			.addCase(fetchSneakers.rejected, state => {
				state.sneakers = [];
			})
			//удаление кроссовок
			.addCase(fetchRemoveSneakers.pending, (state, action) => {
				state.sneakers = state.sneakers.filter(
					obj => obj._id !== action.meta.arg
				);
			});
	},
});

export const sneakersReducer = sneakersSlice.reducer;
export const { setSneakers } = sneakersSlice.actions;
