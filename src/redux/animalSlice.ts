import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { petFinderInstance } from "../utilities/axiosInstance";
import { GetPetState } from "../type/type";

const initialState: GetPetState = {
  animal: null,
  loading: false,
  error: "",
};

export const getAnimal = createAsyncThunk(
  "getAnimal",
  async (animalId: string) => {
    try {
      const resp = await petFinderInstance.get(`/animals/${animalId}`);
      const result = resp.data.animal;
      return result;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const AnimalSlice = createSlice({
  name: "animalData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAnimal.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnimal.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.animal = action.payload;
      })
      .addCase(getAnimal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.animal = null;
      });
  },
});

export default AnimalSlice.reducer;
