import React, { Component } from "react";

const Student = ({ students }) => {
  let studentList = students.map((std) => {
    return (
      <div>
        <h6 className="blue-text center">ID : {std.id}</h6>
        <h6 className="blue-text center">Name : {std.name}</h6>
        <h6 className="blue-text center">Age : {std.age}</h6>
        <h6 className="blue-text center">Faculty : {std.faculty}</h6>
      </div>
    );
  });

  return (
    <div>
      <h1 className="blue-text center">Student Component</h1>
      {studentList}
    </div>
  );
};

export default Student;
