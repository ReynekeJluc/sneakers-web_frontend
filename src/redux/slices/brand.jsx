import axios from '../../axios.jsx';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBrand = createAsyncThunk('brand/fetchBrand', async () => {
	const { data } = await axios.get('/brand');
	return data;
});

const initialState = {
	brand: [],
};

const brandSlice = createSlice({
	name: 'brand',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchBrand.fulfilled, (state, action) => {
				state.brand = action.payload;
			})
			.addCase(fetchBrand.rejected, state => {
				state.brand = [];
			});
	},
});

export const brandReducer = brandSlice.reducer;
