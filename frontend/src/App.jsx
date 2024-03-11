import React, { useEffect } from 'react'

function App() {
  const[data, setData] = React.useState([])

  useEffect(() => {
    fetch('http://localhost:8081/getAthletes')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [])


  return (
    <div style={{padding: '100px'}}>
      <table className="calendar">
        <thead> 
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Grad Year</th>
          <th>Password</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.AthleteID}</td>
              <td>{d.FirstName}</td>
              <td>{d.LastName}</td>
              <td>{d.Gender}</td>
              <td>{d.GradYear}</td>
              <td>{d.Password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App