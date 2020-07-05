import { configureStore } from '@reduxjs/toolkit';

import reducerShow from './ducks/Show';
import reducerShowRoutes from './ducks/ShowRoutes';

export default configureStore({
    reducer: {
        shows: reducerShow,
        showRoutes: reducerShowRoutes,
    }
});

