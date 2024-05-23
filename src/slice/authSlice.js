
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url='https://cattleback.onrender.com' 
//const url='http://localhost:3001'
const initialState = {
  user: {role:'home',isAuth:false},
  isLoading: false,
  error: null, 
  isAuth: false,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const response = await axios.post(`${url}/login`, { email, password }); 
    console.log(response.data)
    return response.data;
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ email, password}) => {
    const response = await axios.post(`${url}/signup`, { email, password });
    return response.data;
  }
); 
export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('your_logout_endpoint');
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null; 
        
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; 
        state.isAuth=true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; 
        
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; 
        state.isAuth=true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logout.fulfilled,(state) => {
        state.isAuth = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
