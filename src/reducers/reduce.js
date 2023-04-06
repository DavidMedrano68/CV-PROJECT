export function generalInfoReducer(state, action) {
  switch (action.type) {
    case "firstName": {
      return { ...state, firstName: action.name };
    }
    case "lastName": {
      return { ...state, lastName: action.lastName };
    }

    case "phoneNumber": {
      return { ...state, phoneNumber: action.phoneNumber };
    }
    case "email": {
      return { ...state, email: action.email };
    }
    default:
      throw Error("Something Happened");
  }
}
