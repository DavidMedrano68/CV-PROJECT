import { useContext, useRef, useState } from "react";
import { ExperienceContext } from "../context/experienceContext";
import { dateConvert } from "../date";
import ExperienceForm from "./experience";
export default function Experience() {
  const taskBtn = useRef(null);

  const [taskEditing, setTaskEditing] = useState(false);
  const exp = useContext(ExperienceContext);
  return (
    <div
      onMouseEnter={() => {
        if (taskBtn.current) {
          taskBtn.current.className = "Btn";
        }
      }}
      onMouseLeave={() => {
        if (taskBtn.current) {
          taskBtn.current.className = "Btn toggle";
        }
      }}
      className="task"
    >
      <div className="title">Experience</div>
      <div className="companyInfo">
        <p className="companyName">
          <span className="companyNameSpan">
            <u> Worked for</u>
          </span>
          {exp.companyName}
        </p>
        <div className="companyTitle">
          <span className="companyTitleSpan">
            <u>Title </u>
          </span>
          {exp.companyTitle}
        </div>
      </div>
      <p className="mainTasks">
        <span className="mainTaskSpan">
          <u>Tasks: </u>
        </span>
        {exp.mainTask}
      </p>
      <span className="dateStarted">
        <span className="dateStartedSpan">
          <u>Date Started</u>
        </span>
        {dateConvert(exp.dateStarted)}
      </span>
      {taskEditing ? (
        <ExperienceForm handleClose={() => setTaskEditing(false)} />
      ) : (
        <button
          ref={taskBtn}
          onClick={() => {
            setTaskEditing(true);
          }}
          className="Btn toggle"
        >
          Edit
        </button>
      )}
    </div>
  );
}
