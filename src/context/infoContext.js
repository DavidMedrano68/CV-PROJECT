import { createContext, useReducer } from "react";
import { generalInfoReducer } from "../reducers/reduce";
export const InfoDispatch = createContext(null);
export const Information = createContext(null);
const initialInfo = {
  firstName: "David",
  lastName: "M",
  email: "DavidM@gmail.com",
  phoneNumber: "123-224-1239",
};
export default function InfoProvider({ children }) {
  const [info, dispatch] = useReducer(generalInfoReducer, initialInfo);
  return (
    <>
      <InfoDispatch.Provider value={dispatch}>
        <Information.Provider value={info}>{children}</Information.Provider>
      </InfoDispatch.Provider>
    </>
  );
}
