import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 

const columns = [
  { field: 'firstName', headerName: 'First Name'},
  { field: 'lastName', headerName: 'Last Name'},
  { field: 'className', headerName: 'Class Name'},
  { field: 'department', headerName: 'Department', width: 180},
  { field: 'gender', headerName: 'Gender', width: 240 },
  { field: 'dateOfBirth', headerName: 'DoB' },
  { field: 'isGraduated', headerName: 'Grad Status' },
  { field: 'age', headerName: 'Age' },
  {
    headerName:"Update",
    field: "Edit",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <div>
            <Link to={`/edit/${cellValues.row.id}`}  style={{ textDecoration: 'none' }}>
            <Button variant="text" color="primary">
                Update
              </Button>
            </Link>
        
        </div>
      );
    }
  },
  {
    headerName:"Delete",
    field: "Delete",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <div>
        <Button
          variant="text"
          color="error"
          onClick={(event) => {
            // updateUpUser(event, cellValues.row.role,cellValues.row._id);
            // console.log(cellValues.row._id)
          }}>
            Delete
        </Button>
        </div>
      );
    }
  }
];

function Student() {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("api/student")
      .then((response) => response.json())
      .then((data) => {
        // Transform the data before setting it in the state
        const transformedData = data.map((student) => ({
            ...student,
            gender: student.gender === 0 ? "Male" : "Female",
            isGraduated: student.isGraduated ? "Yes" : "No",
            dateOfBirth : student.dateOfBirth.split("T")[0],
          }));
          console.log("The students are: ", transformedData);
          setTableData(transformedData);
      })
      .catch((error) => {
        console.log("The error fetching student is: ", error);
      });
  }, []);
    
  return (
      <div>
          
          <div><h3>Student Table</h3></div>

          <div style={{marginBottom:10}}>
          <Button variant="contained">Add Student</Button>
          </div>
      
    <div style={{ height: 500, width: "auto" }}>

      <DataGrid
        getRowId={(row) => row.id}
        rows={tableData}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        // customToolbarSelect
      />
    </div>
    </div>
  );
}

export default Student;