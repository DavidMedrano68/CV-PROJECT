import { useContext, useState } from "react";
import { InfoDispatch, Information } from "../context/infoContext";
import Input from "./input";
export default function Form({ handleClose }) {
  const info = useContext(Information);
  const dispatch = useContext(InfoDispatch);
  const [isEditing, setIsEditing] = useState(true);
  function updateFirstName(e) {
    dispatch({
      type: "firstName",
      name: e.target.value,
    });
  }
  function updateLastName(e) {
    dispatch({
      type: "lastName",
      lastName: e.target.value,
    });
  }
  function updateEmail(e) {
    dispatch({
      type: "email",
      email: e.target.value,
    });
  }
  function updatePhone(e) {
    dispatch({
      type: "phoneNumber",
      phoneNumber: e.target.value,
    });
  }
  function handleClick() {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  return (
    <>
      <div className="generalInfo">
        <Input
          label={"First Name "}
          onChange={updateFirstName}
          value={info.firstName}
          bool={!isEditing}
        />
        <Input
          label={"Last Name "}
          onChange={updateLastName}
          value={info.lastName}
          bool={!isEditing}
        />
        <Input
          bool={!isEditing}
          label={"Email "}
          onChange={updateEmail}
          value={info.email}
        />
        <Input
          label={"Phone Number "}
          onChange={updatePhone}
          value={info.phoneNumber}
          bool={!isEditing}
        />
        <button onClick={handleClick} type="submit">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={handleClose}>Close</button>
      </div>
    </>
  );
}
