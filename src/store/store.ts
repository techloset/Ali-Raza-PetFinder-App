import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import animalReducer from "./slices/animalSlice";
import organizationReducer from "./slices/organizationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    animalData: animalReducer,
    organization: organizationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
