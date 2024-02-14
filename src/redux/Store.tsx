import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import animalReducer from "../redux/AnimalSlice";
import organizationReducer from "../redux/OrganizationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    animalData: animalReducer,
    organization: organizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
