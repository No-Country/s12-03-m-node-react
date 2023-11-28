import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  registration: "",
  phone: "",
  location: {
    city: "",
    country: ""
  },
  last_connection: "",
  profile_img: ""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state = action.payload
      return state
    },
    updateUser: (state, action) => {
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.email = action.payload.email
      state.password = action.payload.password
      state.registration = action.payload.registration
      state.phone = action.payload.phone
      state.location.city = action.payload.location.city
      state.location.country = action.payload.location.country
      state.last_connection = action.payload.last_connection
      state.profile_img = action.payload.profile_img
      return state
    },
    resetUser: (state) => {
      state = initialState
      return state
    }
  }
})

export const { setUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer