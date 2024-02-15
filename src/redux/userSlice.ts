import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {
  addAuthorizationHeader,
  petFinderInstance,
} from "../utilities/axiosInstance";
import { CounterState } from "../type/Type";

const initialState: CounterState = {
  data: [],
  loading: false,
  error: "",
};
export const getAnimals = createAsyncThunk("user", async (_, thunkAPI) => {
  try {
    await addAuthorizationHeader();
    const resp = await petFinderInstance.get("/animals");
    return resp.data.animals;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
});

export const userSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAnimals.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnimals.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getAnimals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string |null;
        state.data = [];
      });
  },
});
export default userSlice.reducer;
