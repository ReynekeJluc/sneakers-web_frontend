import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth.jsx';
import { brandReducer } from './slices/brand.jsx';
import { sneakersReducer } from './slices/sneakers.jsx';

const store = configureStore({
	reducer: {
		sneakers: sneakersReducer,
		brand: brandReducer,
		auth: authReducer,
	},
});

export default store;
