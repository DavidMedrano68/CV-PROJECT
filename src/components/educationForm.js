import { useState } from "react";
import { useContext } from "react";

import Input, { DateInput } from "./input.js";
import {
  EducationContext,
  EducationDispatch,
} from "../context/educationContext";

export default function EducationForm({ handleClose }) {
  const education = useContext(EducationContext);
  const dispatch = useContext(EducationDispatch);
  const [isEditing, setIsEditing] = useState(true);
  function handleClick() {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }
  function handleSchoolName(e) {
    dispatch({
      type: "schoolName",
      schoolName: e.target.value,
    });
  }
  function handleTitleStudy(e) {
    dispatch({
      type: "studyTitle",
      studyTitle: e.target.value,
    });
  }
  function handleDateStudy(e) {
    dispatch({
      type: "dateOfStudy",
      dateOfStudy: e.target.value,
    });
  }
  return (
    <>
      <div className="educationForm">
        <Input
          label={"School Name "}
          bool={!isEditing}
          onChange={handleSchoolName}
          value={education.schoolName}
        />
        <Input
          label={"Title of Study "}
          bool={!isEditing}
          onChange={handleTitleStudy}
          value={education.studyTitle}
        />
        <DateInput
          label={"Date of Study "}
          bool={!isEditing}
          onChange={handleDateStudy}
          value={education.dateOfStudy}
        />
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </>
  );
}
