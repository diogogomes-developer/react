"use client"
import { Provider } from "react-redux";
import { Parent } from "./react-hook-form/Parent";
import { store } from './react-redux-toolkit/store';

export default function Home() {
  return (
    <Provider store={store}>
      <Parent />
    </Provider>
  );
}
