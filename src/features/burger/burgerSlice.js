import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import foodMenu from '../../data/food-menu.json'

export const fetchBurger = createAsyncThunk('burger/fetchBurger', async () => {
  return foodMenu['burgers']
})

export const burgerSlice = createSlice({
  name: 'burger',
  initialState: {
    status: 'idle',
    data: []
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBurger.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBurger.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
  }
})

export default burgerSlice.reducer