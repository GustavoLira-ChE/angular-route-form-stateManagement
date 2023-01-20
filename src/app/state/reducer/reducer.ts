import { counter } from "../state/state";
import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from "../actions/action";

export const counterReducer = createReducer(
  counter,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
