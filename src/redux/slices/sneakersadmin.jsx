import axios from '../../axios.jsx';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSneakersAdmin = createAsyncThunk(
	'sneakers/fetchSneakersAdmin',
	async () => {
		const token = window.localStorage.getItem('token');

		const { data } = await axios.get('/sneakers_admin', {
			headers: { Authorization: `Bearer ${token}` },
		});

		return data;
	}
);

const initialState = {
	sneakers: [],
};

const sneakersSlice = createSlice({
	name: 'sneakers_admin',
	initialState,
	reducers: {
		setSneakers(state, action) {
			state.sneakers = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			// получение кроссовок
			.addCase(fetchSneakersAdmin.fulfilled, (state, action) => {
				state.sneakers = action.payload.data;
			})
			.addCase(fetchSneakersAdmin.rejected, state => {
				state.sneakers = [];
			});
	},
});

export const adminSneakersReducer = sneakersSlice.reducer;
export const { setAdminSneakers } = sneakersSlice.actions;
