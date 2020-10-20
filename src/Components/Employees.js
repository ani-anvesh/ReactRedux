import React, { useState } from "react";
import Employee from "./Employee";
import { useSelector } from "react-redux";

const Employees = () => {
  const allEmployees = useSelector((state) => state.employees);
  console.log(allEmployees);
  return (
    <div style={{ padding: "1.6vh" }}>
      <Employee list={allEmployees.list} />
    </div>
  );
};

export default Employees;
