import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("api/student")
      .then((response) => {console.log(response)})
    //   .then((data) => {
    //     console.log("The students are: ", data);
    //     setStudents(data);
    //   })
      .then((response) => response.json())
      .then((data) => {
        console.log("The students are: ", data);
        setStudents(data);
      })
      .catch((error) => {
        console.log("The error fetching student is: ", error);
      });
  }, []);

  return (
    <div>
      <h1>This is Students Screen</h1>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Class Name</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Graduated</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.firstName}</td>
              <td>{student.firstName}</td>
              <td>{student.firstName}</td>
              <td>{student.firstName}</td>
              <td>{student.firstName}</td>
              <td>{student.firstName}</td>
              <td>{student.firstName}</td>
              {/* <td>{student.lastName}</td>
              <td>{student.className}</td>
              <td>{student.department}</td>
              <td>{student.gender}</td>
              <td>{student.birthday}</td>
              <td>{student.graduated}</td>
              <td>{student.age}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
