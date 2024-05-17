import { configureStore } from '@reduxjs/toolkit';

import { sneakersReducer } from './slices/sneakers.jsx';

const store = configureStore({
	reducer: { sneakers: sneakersReducer },
});

export default store;
