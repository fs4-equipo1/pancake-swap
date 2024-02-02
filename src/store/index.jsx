import { createTypedHooks, createStore } from "easy-peasy";
import { model } from "./model";

export const store = createStore(model);
export const { useStoreActions, useStoreState, useStoreDispatch, useStore } =
  createTypedHooks();
