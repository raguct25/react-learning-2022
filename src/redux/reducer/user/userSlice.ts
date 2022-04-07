import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store-configure";

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface UserState {
  loading: boolean;
  users: UserData[];
  errorMessage: string | null;
}

export interface UserReducerState {
  users: UserState;
}

const initialState: UserState = {
  users: [],
  loading: false,
  errorMessage: null,
};

export const getUsers = createAsyncThunk("users/get", async () => {
  let URL = "https://jsonplaceholder.typicode.com/users";
  let response = await axios.get(URL);
  console.log('response', response);
  
  return response.data;
});

export const getUserReduceData = (state: RootState) => state;


const userSlice = createSlice({
  name: "USER",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.errorMessage = "Server API  call is something issue";
        state.loading = true;
      });
  },
});

export default userSlice.reducer;
