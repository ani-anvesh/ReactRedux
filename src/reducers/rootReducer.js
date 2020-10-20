import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";

const rootReducer = combineReducers({
  employees: EmployeesReducer,
});

export default rootReducer;
