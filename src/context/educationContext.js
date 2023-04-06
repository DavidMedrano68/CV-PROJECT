import { createContext, useReducer } from "react";
import educationReducer from "../reducers/educationReducer";
const initialEducation = {
  schoolName: "Sam Houston",
  dateOfStudy: "2015-08",
  studyTitle: "Computer Science",
};
export const EducationContext = createContext(null);
export const EducationDispatch = createContext(null);
export default function EducationProvider({ children }) {
  const [education, eduDispatch] = useReducer(
    educationReducer,
    initialEducation
  );
  return (
    <>
      <EducationContext.Provider value={education}>
        <EducationDispatch.Provider value={eduDispatch}>
          {children}
        </EducationDispatch.Provider>
      </EducationContext.Provider>
    </>
  );
}
