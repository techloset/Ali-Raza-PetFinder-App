import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { petFinderInstance } from "../utilities/axiosInstance/axiosInstance";


type Photos = {
  small: string;
  medium: string;
  large: string;
  full: string;
};
type Address = {
  address1: string | null;
  address2: string | null;
  city: string;
  country: string;
  postcode: number;
  state: string;
};
export type Contact = {
  email: string;
  phone: number;
  address: Address;
};
type Colors = {
  primary: string ;
  secondary: string ;
  tertiary: string ;
};
type Breeds = {
  mixed: boolean;
  primary: string;
  secondary: string;
  unknown: boolean;
};

export type animal = {
  age: string;
  gender: string;
  name: string;
  description: string | null;
  contact: Contact | null ;
  photos: Photos[] ;
  status: string;
  species: string;
  size: string;
  type: string;
  colors: Colors[] ;
  coat: string;
  breeds: Breeds | null;
  organization_id: string;
  url:string;
}

export interface GetPetState {
  animal: animal | null;
  loading: boolean;
  error: string | null;
}
const initialState: GetPetState = {
  animal: null,
  loading: false,
  error: "",
};

export const getAnimal= createAsyncThunk("getAnimal", async (animalId: string) => {
  try {
    const resp = await petFinderInstance.get(`/animals/${animalId}`)
    
    const result = resp.data.animal
    
    return result;
  } catch (error) {
    console.log('error', error)
  }
});

export const AnimalSlice = createSlice({
  name: "animalData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAnimal.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAnimal.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = null;
        state.animal = action.payload;
      })
      .addCase(getAnimal.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.animal = null;
      });
  },
});


export default AnimalSlice.reducer;