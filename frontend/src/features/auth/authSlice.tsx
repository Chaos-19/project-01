import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface AuthState {
  username: string,
  email:string,
  token:string
}

// Define the initial state using that type
const initialState: AuthState = {
  username:null,
  email:null,
  token:null
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCredentials: (state,action:PayloadAction<AuthState>) => {
      const {username,email,token} =  action.payload
      state.username = username
      state.email = email
      state.token = token
    },
    logOut: (state) => {
      state.username = null
      state.email = null
      state.token = null
    }
  },
})

export const { setCredentials,logOut } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentUser = (state) => state.auth.username

export const selectCurrentToken= (state) => state.auth.token
  

export default authSlice.reducer