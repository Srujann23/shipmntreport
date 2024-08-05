import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';



const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

useEffect(() => {
  fetch('https://run.mocky.io//v3//69f60a58-3a36-48c5-a9cf-b100b015950c//')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);

const handleSearch = (e) => {
  setSearch(e.target.value);
};
const filteredData = data.filter(item => 
  item.role.toLowerCase().includes(search.toLowerCase())
);

return (
  <div className="App">
    <h1>Data Table</h1>
    <input
      type="text"
      placeholder="Search by Role"
      value={search}
      onChange={handleSearch}
    />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>Hire Date</th>
          <th>Active</th>
          <th>Salary</th>
          <th>Department</th>
          <th>Projects Completed</th>
          <th>Last Login</th>
          <th>Access Level</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.role}</td>
            <td>{new Date(item.hireDate).toLocaleDateString()}</td>
            <td>{item.isActive ? 'True' : 'False'}</td>
            <td>{item.salary}</td>
            <td>{item.department}</td>
            <td>{item.projectsCompleted}</td>
            <td>{new Date(item.lastLogin).toLocaleString()}</td>
            <td>{item.accessLevel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}
export default App;