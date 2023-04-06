import "./App.css";
import CV from "./components/cv";
import EducationProvider from "./context/educationContext";
import ExperienceProvider from "./context/experienceContext";
import InfoProvider from "./context/infoContext";
export default function App() {
  return (
    <div className="App">
      <InfoProvider>
        <EducationProvider>
          <ExperienceProvider>
            <CV />
          </ExperienceProvider>
        </EducationProvider>
      </InfoProvider>
    </div>
  );
}
