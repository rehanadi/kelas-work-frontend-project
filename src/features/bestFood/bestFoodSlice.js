import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import foodMenu from '../../data/food-menu.json'

export const fetchBestFood = createAsyncThunk('bestFood/fetchBestFood', async () => {
  return foodMenu['best-foods']
})

export const bestFoodSlice = createSlice({
  name: 'bestFood',
  initialState: {
    status: 'idle',
    data: []
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBestFood.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBestFood.fulfilled, (state, action) => {
        state.status = 'success'
        state.data = action.payload
      })
  }
})

export default bestFoodSlice.reducer