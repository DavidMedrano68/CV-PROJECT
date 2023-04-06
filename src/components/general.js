import { useRef, useState, useContext } from "react";
import Form from "./form";
import { Information } from "../context/infoContext";
export default function General() {
  const generalBtn = useRef(null);
  const [genEditing, setGenEditing] = useState(false);
  const info = useContext(Information);
  return (
    <div
      onMouseEnter={() => {
        if (generalBtn.current) {
          generalBtn.current.className = "Btn";
        }
      }}
      onMouseLeave={() => {
        if (generalBtn.current) {
          generalBtn.current.className = "Btn toggle";
        }
      }}
      className="general"
    >
      <div className="title">General Information</div>
      <h2 className="name">{info.firstName + " " + info.lastName}</h2>
      <div className={genEditing ? "info form" : "info"}>
        <span className="email">{info.email}</span>
        <span className="phone">{info.phoneNumber}</span>
        {genEditing ? (
          <Form handleClose={() => setGenEditing(false)} />
        ) : (
          <button
            ref={generalBtn}
            onClick={() => setGenEditing(true)}
            className="Btn toggle"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
