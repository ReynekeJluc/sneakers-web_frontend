import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './slices/auth.jsx';
import { sneakersReducer } from './slices/sneakers.jsx';

const store = configureStore({
	reducer: {
		sneakers: sneakersReducer,
		auth: authReducer,
	},
});

export default store;
