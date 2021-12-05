import { createContext } from "react";
import { CountryStateIterface } from "./CountryReducer";

export const initialState: CountryStateIterface = {
  countries: [],
  loading: false
};

const CountryContex = createContext<CountryStateIterface>(initialState);

export default CountryContex;
