import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'authenticated',
  initialState: false,
  reducers: {
    setAuthenticated: (state, action) => {
      console.log('setAuthenticated fired...');
      console.log(JSON.stringify(action));

      state = action.payload

      return state;
    }
  },
});

export const selectAuthenticated = state => state;

export const {setAuthenticated} = slice.actions;

export default slice.reducer;
