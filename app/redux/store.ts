import { configureStore } from "@reduxjs/toolkit";
import emailApi from "./features/EmailsApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [emailApi.reducerPath]: emailApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([emailApi.middleware]),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
