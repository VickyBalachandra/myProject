import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:3000/employees");
    setEmployee(data.data);
  };

  useEffect(() => {
    fetchData();
  }, [employee]);
 
  const handleDelete = async(id) => {
    const data = await axios.delete(`http://localhost:3000/employees/${id}`);
  };






  return (
    <div className="tablediv">
      <h1>Employee Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete </th>
          </tr>
        </thead>

        <tbody>
        {employee.map((emp) => {
            return (
              <tr key={emp.id}>
                <td>{emp.ename}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.password}</td>
                <td>
                  <Link to={`/editemployee/${emp.id}`}><button>Edit</button></Link>
                </td>
                <td>
                  <button id="delete" onClick={()=>{handleDelete(emp.id)}}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
