import General from "./general";
import Education from "./education";
import Experience from "./experienceDiv";

export default function CV() {
  return (
    <>
      <div className="CV">
        <div className="profilePicture"></div>
        <General />
        <Education />
        <Experience />
      </div>
    </>
  );
}
