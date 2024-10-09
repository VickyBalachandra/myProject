import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const  navigate = useNavigate();

  const [employee, setEmployee] = useState({
    ename: "",
    email: "",
    phone: "",
    password: "",
  });

  const{ename,email,phone,password} = employee;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({...employee, [name]: value,});
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // console.log(employee);
    const data = await axios.post("http://localhost:3000/employees", employee);
   
    setEmployee({
      ename: "",
      email: "",
      phone: "",
      password: ""})

      navigate("/employee")


    
  };

  return (
    <div className="formdiv">
        <form  onSubmit={handleSubmit}>
            <h1>Registration</h1>

            <label htmlFor="ename">Enter your name</label>
            <input type="text" placeholder="Enter your name" name="ename" id="ename" value={ename} onChange={handleChange} />

            <label htmlFor="email">Enter your email</label>
            <input type="email" placeholder="Enter your email" name="email" id="email" value={email}  onChange={handleChange}  />

            <label htmlFor="phone">Enter your phone number</label>
            <input type="number" placeholder="Enter your phone number" name="phone" id="phone"  value={phone}  onChange={handleChange} />

            <label htmlFor="password">Enter your password</label>
            <input type="password" placeholder="Enter your password" name="password" id="password" value={password}  onChange={handleChange}  />

            <button type="submit">Submit</button>

        </form>
    </div>
  )
};

export default Register;
