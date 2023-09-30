import {  Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';

import {FormControl,FormLabel,RadioGroup,Radio,FormControlLabel,InputLabel,Select,MenuItem} from '@mui/material';


const paperStyle={padding:20, height:'auto', width:400, margin:'50px auto'};
const textStyle={margin:'0px 0px 20px 0px'};
const btnStyle={margin:'8px 0'};
const bottomText={margin:'10px 0px 10px 0px'};
const errorMsg = {width:"auto", padding: "15px", margin:"5px 0",fontSize: "15px",
                  backgroundColor:"#f34646",color:"white",textAlign:"center", borderRadius:"4px"
                };

const New=()=>{

//   const navigate = useNavigate();

  const [student,setStudent] = useState({
    firstName:'',
    lastName:'',
    className:'',
    department:'',
    gender:'',
    dateOfBirth:'',
    isGraduated:'',
    age:''
  });

  const [error,setError] = useState("")
  
  const handleChange = (e) =>{
    setStudent({...student,[e.target.name]:e.target.value});}

  const handleSubmit = async (e) =>{
    e.preventDefault();

      try{
        const user = {
            "firstName":student.firstName,
            "lastName":student.lastName,
            "className":student.className,
            "department":student.department,
            "gender":student.gender,
            "dateOfBirth":student.dateOfBirth,
            "isGraduated":student.isGraduated,
            "age":student.age
        }
        console.log(user);

        // await axios.post("http://localhost:4500/user/add",user).then(() => {
        //   alert("User Created");
        //   navigate('/signin');
        // })
        
        
      }catch(error){
        console.log(error)
        if(
          error.response &&
          error.response.status >=400 &&
          error.response.status <=500
        ){
          setError(error.response.data.message);
        }
      }
    
  }


  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          {/* <img src={Logo} alt="Logo" /> */}
          <h2>Add Student </h2>
        </Grid>
        <form onSubmit={handleSubmit}>

        <TextField label="Enter Your First Name" name="firstName" fullWidth required  value={student.firstName} style={textStyle} onChange={handleChange} />
        <TextField label="Enter Your Last Name" name="lastName" fullWidth required  value={student.lastName}  style={textStyle} onChange={handleChange} />
        <TextField label="Enter Your Class Name" name="className" fullWidth required style={textStyle} value={student.className} onChange={handleChange} />
        <TextField label="Enter Your Department" name="department" fullWidth required style={textStyle} value={student.department} onChange={handleChange} />
        
        <FormControl >
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Male" name="gender" value={student.gender} onChange={handleChange}>
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
            </RadioGroup>
        </FormControl>
        <TextField label="Enter Your DoB" name="dateOfBirth" fullWidth required style={textStyle} value={student.dateOfBirth} onChange={handleChange} />
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Graduated Status</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" name = "isGraduated" style={textStyle} value={student.isGraduated} label="City" onChange={handleChange}>
                    <MenuItem value={"Graduated"}>Graduated</MenuItem>
                    <MenuItem value={"Not Graduated"}>Not Graduated</MenuItem>
                </Select>
        </FormControl>

        <TextField label="Enter Your age" name="age" fullWidth required style={textStyle} value={student.age} onChange={handleChange} />

        {error && <div style={errorMsg}>{error}</div>}
        <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle} >Add Student</Button>
        </form>
      </Paper>
    </Grid>
  );
}


export default New;