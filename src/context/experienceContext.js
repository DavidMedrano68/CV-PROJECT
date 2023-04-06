import { createContext, useReducer } from "react";
import experienceReducer from "../reducers/experienceReducer";
const initalExperience = {
  companyName: "Suncoast",
  companyTitle: "MIG Welder",
  mainTask: "Responsible to keep material up to quality standards",
  dateStarted: "2017-07",
};
export const ExperienceContext = createContext(null);
export const ExperienceDispatch = createContext(null);
export default function ExperienceProvider({ children }) {
  const [experience, dispatch] = useReducer(
    experienceReducer,
    initalExperience
  );
  return (
    <>
      <ExperienceContext.Provider value={experience}>
        <ExperienceDispatch.Provider value={dispatch}>
          {children}
        </ExperienceDispatch.Provider>
      </ExperienceContext.Provider>
    </>
  );
}
