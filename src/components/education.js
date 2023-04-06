import { dateConvert } from "../date";
import { useContext, useState, useRef } from "react";
import { EducationContext } from "../context/educationContext";
import EducationForm from "./educationForm";
export default function Education() {
  const edu = useContext(EducationContext);
  const [eduEditing, setEduEditing] = useState(false);
  const educationBtn = useRef(null);
  function eduMouseEnter() {
    if (educationBtn.current) {
      educationBtn.current.className = "Btn";
    }
  }
  function eduMouseLeave() {
    if (educationBtn.current) {
      educationBtn.current.className = "Btn toggle";
    }
  }
  return (
    <div
      onMouseEnter={eduMouseEnter}
      onMouseLeave={eduMouseLeave}
      className="education"
    >
      <div className="schoolInfo">
        <div className="title">Education</div>
        <div className="schoolName">
          <span className="schoolNameSpan">
            <u>Studied at </u>
          </span>
          {edu.schoolName}
        </div>
        <p className="studyTitle">
          <span className="studyTitleSpan">
            <u>Studied </u>
          </span>
          {edu.studyTitle}
        </p>
        <div className="dateStudied">
          <span className="dateStudiedSpan">
            <u>Started </u>
          </span>
          {dateConvert(edu.dateOfStudy)}
        </div>
        {eduEditing ? (
          <EducationForm handleClose={() => setEduEditing(false)} />
        ) : (
          <button
            ref={educationBtn}
            onClick={() => setEduEditing(true)}
            className="Btn toggle"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
