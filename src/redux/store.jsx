import { configureStore } from '@reduxjs/toolkit';

import { allSneakersReducer } from './slices/allsneakers.jsx';
import { authReducer } from './slices/auth.jsx';
import { brandReducer } from './slices/brand.jsx';
import { pagesReducer } from './slices/pages.jsx';
import { sneakersReducer } from './slices/sneakers.jsx';
import { adminSneakersReducer } from './slices/sneakersadmin.jsx';

const store = configureStore({
	reducer: {
		allSneakers: allSneakersReducer,
		adminSneakers: adminSneakersReducer,
		sneakers: sneakersReducer,
		brand: brandReducer,
		pages: pagesReducer,
		auth: authReducer,
	},
});

export default store;
