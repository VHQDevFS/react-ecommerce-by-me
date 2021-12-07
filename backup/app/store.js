import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH, PAUSE,
  PERSIST, persistReducer, persistStore, PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from '../Redux/auth/authSlice'
import cartReducer from '../Redux/Cart/cartSlice'
import productsReducer from '../Redux/products/productsSlice'

const persistConfig = {
  key: 'root',
  storage
}
const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartReducer,
  auth: authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
export default store
