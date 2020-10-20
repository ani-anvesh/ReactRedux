import React, { useState } from "react";
import { useParams } from "react-router-dom";
import img from "./pro.jpg";
import PopUp from "./PopUp";

export default function Profile() {
  let { id } = useParams();
  const [update, setUpdate] = useState(false);

  const close = () => {
    setUpdate(false);
  };

  if (localStorage.getItem("employeeList") !== null) {
    var list = JSON.parse(localStorage.getItem("employeeList"));
  }
  const j = list.findIndex((x) => x.empName === id);
  const employee = list[j];

  return (
    <div style={{ padding: "1.6vh" }}>
      <h2 style={{ textAlign: "center", marginTop: "3vh" }}>
        Employee Profile
      </h2>

      <div className="card">
        <img src={img} alt="profile" className="shake-vertical" />
        <h1>{id}</h1>
        <p className="title">
          {Array.prototype.map
            .call(employee.empRole, function (item) {
              return item.label;
            })
            .join(", ")}
        </p>
        <div className="icons" style={{ margin: "27px 0" }}>
          <a href="#">
            <i className="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
        </div>
        <p>
          <button className="buttons" onClick={() => setUpdate(!update)}>
            Update
          </button>
        </p>
      </div>
      {update && (
        <PopUp
          type={"Want Update Employee Details...!"}
          data={{
            empName: employee.empName,
            empRole: employee.empRole,
            empId: employee.id,
          }}
          close={close}
        />
      )}
    </div>
  );
}
