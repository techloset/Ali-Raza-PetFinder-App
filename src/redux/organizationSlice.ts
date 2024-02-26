import {
  AsyncThunk,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  addAuthorizationHeader,
  petFinderInstance,
} from "../utilities/axiosInstance";
import { GetOrganizationState } from "../type/type";

const initialState: GetOrganizationState = {
  organization: [],
  loading: false,
  error: "",
};

export const GetOrganization = createAsyncThunk(
  "organization",
  async (organization_id: string, thunkAPI) => {
    try {
      const resp = await petFinderInstance.get(
        `/animals?organization=${organization_id}`
      );
      await addAuthorizationHeader();
      const result = resp.data.animals;
      return result;
    } catch (error) {
      console.log("Error fetching organization_id:", error);
    }
  }
);

export const OrganizaionSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(GetOrganization.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetOrganization.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.organization = action.payload;
      })
      .addCase(GetOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | null;
        state.organization = [];
      });
  },
});

export default OrganizaionSlice.reducer;
