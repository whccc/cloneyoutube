import { combineReducers } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

// Combina los reducers de tu aplicación
const rootReducer = combineReducers({
  menuActive: menuSlice,
  // Agrega otros reducers aquí si los tienes
});

export default rootReducer;
