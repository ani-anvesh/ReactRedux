import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PopUp from "./Utils/PopUp";
import { Link } from "react-router-dom";

const Activity = (props) => {
  const [update, setUpdate] = useState(false);
  const [mud, setMud] = useState(props);
  const [dat, setDat] = useState({});

  const close = () => {
    setUpdate(false);
  };
  useEffect(() => {
    const subscribe = () => {
      setMud(props);
    };
    subscribe();
  }, [props]);

  const dispatch = useDispatch();
  const deleteEmployee = (id) => {
    dispatch({
      type: "DELETE_EMPLOYEE",
      payload: {
        id: id,
      },
    });
  };

  /*
   */
  return (
    <div style={{ overflowX: "auto", marginTop: "7vh" }}>
      <h2 style={{ textAlign: "center", marginTop: "3vh" }}>Employee List</h2>
      <table>
        <tr>
          <th>Employee Name</th>
          <th>Employee Roles</th>
          <th>Update Employee</th>
          <th>Delete Employee</th>
        </tr>
        {mud.list.map((employee) => (
          <tr>
            <td style={{ fontWeight: "360" }}>
              <Link
                style={{ textDecoration: "none", cursor: "pointer" }}
                to={`/employee/${employee.empName}`}
              >
                {employee.empName}
              </Link>
            </td>
            <td className="title">
              {Array.prototype.map
                .call(employee.empRole, function (item) {
                  return item.label;
                })
                .join(", ")}
            </td>
            <td>
              <button
                className="bun bunU"
                onClick={() => {
                  setUpdate(!update);
                  setDat({
                    empName: employee.empName,
                    empRole: employee.empRole,
                    id: employee.id,
                  });
                }}
              >
                Update
              </button>
            </td>
            <td>
              <button
                className="bun bunD"
                onClick={() => deleteEmployee(employee.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        {update && (
          <PopUp
            type={"Want to Update Employee Details...!"}
            data={{
              empName: dat.empName,
              empRole: dat.empRole,
              empId: dat.id,
            }}
            close={close}
          />
        )}
      </table>
    </div>
  );
};

export default Activity;
