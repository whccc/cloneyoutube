import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define el estado inicial del contador
interface CounterState {
  value: number;
  data: {
    wilson: string;
    name: string;
  };
}

const initialState: CounterState = {
  value: 0,
  data: {
    wilson: "sss",
    name: "sss",
  },
};

// Define el slice del contador con las acciones y el reducer
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.data.name = action.payload;
    },
  },
});

// Exporta las acciones del slice
export const { increment, decrement, incrementByAmount, changeName } =
  counterSlice.actions;

// Exporta el reducer del slice
export default counterSlice.reducer;
