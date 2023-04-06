export default function experienceReducer(experience, action) {
  switch (action.type) {
    case "companyName": {
      return { ...experience, companyName: action.companyName };
    }
    case "companyTitle": {
      return { ...experience, companyTitle: action.companyTitle };
    }
    case "mainTask": {
      return { ...experience, mainTask: action.mainTask };
    }
    case "dateStarted": {
      return { ...experience, dateStarted: action.dateStarted };
    }
    default: {
      throw Error("something happened");
    }
  }
}
