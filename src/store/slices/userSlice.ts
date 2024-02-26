import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addAuthorizationHeader,
  petFinderInstance,
} from "../../utilities/axiosInstance";
import { CounterState } from "../../type/type";

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
    if (error instanceof Error) {
      throw new Error(error?.message || "Error while fetching data from API");
    } else {
      throw new Error("Unknown error occurred");
    }
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
        state.error = action.payload as string | null;
        state.data = [];
      });
  },
});
export default userSlice.reducer;
