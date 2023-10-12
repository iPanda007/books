import { useContext } from "react";
import { context } from "./context";

export const useBookServices = ()=>useContext(context);

export { Provider as BookProvider } from './context'