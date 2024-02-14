import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import animalReducer from "./animalSlice";
import organizationReducer from "./organizationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    animalData: animalReducer,
    organization: organizationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
