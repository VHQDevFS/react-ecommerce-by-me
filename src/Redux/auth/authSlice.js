import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userApi from '../../api/userApi'

const initialState = {
  token: null,
  loading: false,
  errorMsg: ''
}

export const authLogin = createAsyncThunk('auth/login', async payload => {
  const response = await userApi.login(payload)

  return response.data
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authLogin.pending]: (state, action) => {
      state.loading = true
      console.log('signing')
    },

    [authLogin.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.token = action.payload
    },
    
    [authLogin.rejected]: (state, action) => {
      state.loading = false
      state.errorMsg = 'login failed'
    }
  }
})

export default authSlice.reducer
