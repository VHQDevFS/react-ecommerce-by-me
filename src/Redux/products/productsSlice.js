import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productApi from '../../api/productApi'

const initialState = {
  loading: false,
  allProducts: [],
  errorMsg: '',
  product: {}
}

//async action
export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await productApi.getProducts({
    limit: 8
  })
  return response.data
})

export const getProductByCategory = createAsyncThunk('products/getByCategory', async category => {
  const response = await productApi.getProductByCategory(category)
  return response.data
})

export const getProductsSort = createAsyncThunk('products/getProductsSortBy', async sort => {
  const response = await productApi.getProducts({
    sort
  })
  return response.data
})

export const getProductDetail = createAsyncThunk('products/getById', async productId => {
  const response = await productApi.getProductById(productId)
  return response.data
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    removeProductSelected : (state, action) => {
      state.product = {}
    }
  },
  extraReducers: {
    //get all
    [getProducts.pending]: (state, action) => {
      state.loading = true
    },

    [getProducts.fulfilled]: (state, action) => {
      state.loading = false
      state.allProducts = action.payload
      state.errorMsg = ''
    },

    [getProducts.rejected]: (state, action) => {
      state.loading = false
      state.errorMsg = 'unable to fetch products'
    },

    // get by category
    [getProductByCategory.pending]: (state, action) => {
      state.loading = true
      console.log('fetching category')
    },

    [getProductByCategory.fulfilled]: (state, action) => {
      state.loading = false
      state.allProducts = action.payload
      state.errorMsg = ''
    },

    [getProductByCategory.rejected]: (state, action) => {
      state.loading = false
      state.errorMsg = 'unable to fetch products'
    },

    //sort
    [getProductsSort.pending]: (state, action) => {
      state.loading = true
    },

    [getProductsSort.fulfilled]: (state, action) => {
      state.loading = false
      state.allProducts = action.payload
      state.errorMsg = ''
    },

    [getProductsSort.rejected]: (state, action) => {
      state.loading = false
      state.errorMsg = 'unable to fetch products'
    },

    //get by product Id
    [getProductDetail.pending]: (state, action) => {
      state.loading = true
    },

    [getProductDetail.fulfilled]: (state, action) => {
      state.loading = false
      state.product = action.payload
      state.errorMsg = ''
    },

    [getProductDetail.rejected]: (state, action) => {
      state.loading = false
      state.errorMsg = 'unable to fetch products'
    }
  }
})


//action 

export const {removeProductSelected} = productsSlice.actions


//reducer
const productsReducer = productsSlice.reducer


export default productsReducer
