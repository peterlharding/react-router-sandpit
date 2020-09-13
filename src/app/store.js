import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authenticatedReducer from '../features/authenticated/authenticatedSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    authenticated: authenticatedReducer,
  },
});
