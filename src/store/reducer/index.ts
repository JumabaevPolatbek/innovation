import { combineReducers } from "@reduxjs/toolkit";
import { getApi } from "./postSlice";
const rootReducer = combineReducers({
  [getApi.reducerPath]: getApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
