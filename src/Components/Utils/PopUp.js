import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";

const createRandomString = function (strLength) {
  strLength = typeof strLength == "number" && strLength > 0 ? strLength : false;
  if (strLength) {
    var possibleCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";

    var str = "";
    for (var i = 1; i <= strLength; i++) {
      var randomCharacter = possibleCharacters.charAt(
        Math.floor(Math.random() * possibleCharacters.length)
      );
      str += randomCharacter;
    }
    return str;
  } else {
    return false;
  }
};
const options = [
  { value: "web developer", label: "Web Developer" },
  { value: "intern", label: "Intern" },
  { value: "admin", label: "Admin" },
];

export default function PopUp(props) {
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    empName: props.data
      ? props.data.empName
      : "Hey there enter Employee name here...!",
    empRole: props.data ? props.data.empRole : [],
  });
  useEffect(() => {
    const subscribe = () => {
      setData({
        empName: props.data
          ? props.data.empName
          : "Hey there enter Employee name here...!",
        empRole: props.data ? props.data.empRole : [],
      });
    };
    subscribe();
  }, [props]);
  const handleChange = (e) => {
    e.persist();
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleChanges = (options) => {
    setSelectedOptions(options);
  };
  console.log(selectedOptions);
  console.log(data);

  const addEmployee = () => {
    setLoading(!loading);
    dispatch({
      type: "CREATE_EMPLOYEE",
      payload: {
        id: createRandomString(16),
        empName: data.empName,
        empRole: selectedOptions,
      },
    });
    alert(
      "Hey User an Employee is created, If you want to add another employee continue or press the close button"
    );
    setLoading(false);
  };

  const updateEmployee = () => {
    setLoading(!loading);
    dispatch({
      type: "UPDATE_EMPLOYEE",
      payload: {
        id: props.data.empId,
        empName: data.empName,
        empRole: selectedOptions,
      },
    });
    setLoading(false);
    props.close();
  };

  return (
    <div id="mypopup" className="popup">
      <div className="popup-content">
        <span className="close" onClick={props.close}>
          &times;
        </span>
        <h2 style={{ textAlign: "center", marginTop: "3vh" }}>{props.type}</h2>

        <div className="addForm ">
          <div className="row">
            <div className="hello-1">
              <label htmlFor="empName">Employee Name</label>
            </div>
            <div className="hello-2">
              <input
                type="text"
                id="empName"
                name="empName"
                onFocus={(e) =>
                  props.data
                    ? (e.target.value = data.empName)
                    : (e.target.value = "")
                }
                value={data.empName}
                placeholder="Add an Employee here...!"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="hello-1">
              <label htmlFor="empRole">Employee Role</label>
            </div>
            <div className="hello-2">
              <Select
                id="empRole"
                name="empRole"
                closeMenuOnSelect={false}
                defaultValue={data.empRole}
                onFocus={(e) =>
                  props.data
                    ? (e.target.value = data.empRole)
                    : (e.target.value = "")
                }
                isMulti
                options={options}
                onChange={handleChanges}
              />
            </div>
          </div>

          <div className="row">
            <button
              className="addButton"
              onClick={props.data ? updateEmployee : addEmployee}
            >
              {loading && <i class="fa fa-spinner fa-spin" />}
              {props.data ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
