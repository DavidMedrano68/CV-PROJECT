export default function educationReducer(edu, action) {
  switch (action.type) {
    case "schoolName": {
      return { ...edu, schoolName: action.schoolName };
    }
    case "studyTitle": {
      return { ...edu, studyTitle: action.studyTitle };
    }
    case "dateOfStudy": {
      return { ...edu, dateOfStudy: action.dateOfStudy };
    }

    default:
      throw Error("something happened");
  }
}
