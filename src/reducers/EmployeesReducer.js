if (localStorage.getItem("employeeList") == null)
  localStorage.setItem("employeeList", JSON.stringify([]));
let initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem("employeeList")),
};

const EmployeesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  var list = JSON.parse(localStorage.getItem("employeeList"));

  switch (type) {
    case "CREATE_EMPLOYEE":
      list.push(payload);
      localStorage.setItem("employeeList", JSON.stringify(list));
      return { list };

    case "UPDATE_EMPLOYEE":
      const j = list.findIndex((x) => x.id === payload.id);
      list[j] = payload;
      localStorage.setItem("employeeList", JSON.stringify(list));
      return { list };

    case "DELETE_EMPLOYEE":
      const i = list.findIndex((x) => x.id === payload.id);
      list.splice(i, 1);
      localStorage.setItem("employeeList", JSON.stringify(list));
      return { list };
    default:
      return state;
  }
};

export default EmployeesReducer;
