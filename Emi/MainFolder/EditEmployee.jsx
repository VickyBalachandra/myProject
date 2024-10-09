import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditEmployee = () => {

    const navigate = useNavigate();
    const{id}= useParams();

    const [employee, setEmployee] = useState({
        ename: "",
        email: "",
        phone: "",
        password: "",
      });
    
      


    const fetchData = async () => {
      const data = await axios.get(`http://localhost:3000/employees/${id}`);
      setEmployee(data.data);
      
      
    };
  
    useEffect(() => {
      fetchData();
    }, [id]);


    const{ename,email,phone,password} = employee;



    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee({...employee, [name]: value,});
      };
    
      const handleSubmit = async(event) => {
        event.preventDefault();
        // console.log(employee);
        const data = await axios.put(`http://localhost:3000/employees/${id}`, employee);
        // console.log(data.data);
        navigate(-1);

        
      };

  return (
    <div className="formdiv">
        <form  onSubmit={handleSubmit}>
            <h1>Updation</h1>

            <label htmlFor="ename">Enter your name</label>
            <input type="text" placeholder="Enter your name" name="ename" id="ename" value={ename} onChange={handleChange} />

            <label htmlFor="email">Enter your email</label>
            <input type="email" placeholder="Enter your email" name="email" id="email" value={email}  onChange={handleChange}  />

            <label htmlFor="phone">Enter your phone number</label>
            <input type="number" placeholder="Enter your phone number" name="phone" id="phone"  value={phone}  onChange={handleChange} />

            <label htmlFor="password">Enter your password</label>
            <input type="password" placeholder="Enter your password" name="password" id="password" value={password}  onChange={handleChange}  />

            <button type="submit">Update</button>

        </form>
    </div>
  )
}

export default EditEmployee