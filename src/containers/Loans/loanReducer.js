import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const requestLoans = createAsyncThunk('loans/requestLoans', async () => {
    const url = 'https://my-json-server.typicode.com/EarnUp/demo/loans';
    const response = await axios.get(url);
    return response.data;
});

export const loans = createSlice({
  name: 'loans',
  initialState: {
    loansList: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requestLoans.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(requestLoans.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loansList = action.payload;
      })
      .addCase(requestLoans.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getLoansList = state => state.loans.loansList;

export default loans.reducer;