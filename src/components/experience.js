import Input, { DateInput, TextArea } from "./input";
import {
  ExperienceContext,
  ExperienceDispatch,
} from "../context/experienceContext";
import { useContext, useState } from "react";

export default function ExperienceForm({ handleClose }) {
  const [isEditing, setIsEditing] = useState(true);
  const experience = useContext(ExperienceContext);
  const dispatch = useContext(ExperienceDispatch);
  function handleClick() {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }
  function handleCompanyName(e) {
    dispatch({
      type: "companyName",
      companyName: e.target.value,
    });
  }
  function handleCompanyTitle(e) {
    dispatch({
      type: "companyTitle",
      companyTitle: e.target.value,
    });
  }
  function handleMainTasks(e) {
    dispatch({
      type: "mainTask",
      mainTask: e.target.value,
    });
  }
  function handleDateStarted(e) {
    dispatch({
      type: "dateStarted",
      dateStarted: e.target.value,
    });
  }
  return (
    <>
      <div className="experienceForm">
        <Input
          value={experience.companyName}
          onChange={handleCompanyName}
          bool={!isEditing}
          label={"Company Name"}
        />
        <Input
          value={experience.companyTitle}
          onChange={handleCompanyTitle}
          bool={!isEditing}
          label={"Company Title"}
        />
        <TextArea
          value={experience.mainTask}
          onChange={handleMainTasks}
          bool={!isEditing}
          label={"Main Tasks"}
        />
        <DateInput
          value={experience.dateStarted}
          onChange={handleDateStarted}
          bool={!isEditing}
          label={"Date Started "}
        />
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </>
  );
}
