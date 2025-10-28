import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App(){
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({name:'', email:'', department:'', salary:''});
  const [editing, setEditing] = useState(null);

  useEffect(()=>{ fetchAll(); }, []);

  function fetchAll(){
    axios.get('/api/employees').then(r=>setEmployees(r.data)).catch(e=>console.error(e));
  }

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function clear(){
    setForm({name:'', email:'', department:'', salary:''});
    setEditing(null);
  }

  function submit(e){
    e.preventDefault();
    const payload = {...form, salary: parseFloat(form.salary || 0)};
    if(editing){
      axios.put(`/api/employees/${editing}`, payload).then(()=>{ fetchAll(); clear(); });
    } else {
      axios.post('/api/employees', payload).then(()=>{ fetchAll(); clear(); });
    }
  }

  function edit(emp){
    setEditing(emp.id);
    setForm({name:emp.name, email:emp.email, department:emp.department, salary:emp.salary});
    window.scrollTo({top:0, behavior:'smooth'});
  }

  function remove(id){
    if(!window.confirm('Delete this employee?')) return;
    axios.delete(`/api/employees/${id}`).then(()=>fetchAll());
  }

  return (
    <div className="app">
      <header className="top">
        <div className="brand">EMS</div>
        <div className="subtitle">Employee Management System</div>
      </header>

      <main className="main">
        <section className="left card">
          <h2>Employees</h2>
          <table className="emp-table">
            <thead><tr><th>Name</th><th>Email</th><th>Department</th><th>Salary</th><th></th></tr></thead>
            <tbody>
              {employees.length===0 && <tr><td colSpan="5" className="muted">No records</td></tr>}
              {employees.map(emp=>(
                <tr key={emp.id}>
                  <td className="name" onClick={()=>edit(emp)}>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>₹ {emp.salary?.toLocaleString()}</td>
                  <td className="actions">
                    <button className="btn" onClick={()=>edit(emp)}>Edit</button>
                    <button className="btn del" onClick={()=>remove(emp.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <aside className="right card">
          <h3>{editing ? 'Edit Employee' : 'Add Employee'}</h3>
          <form onSubmit={submit} className="form">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input name="department" value={form.department} onChange={handleChange} placeholder="Department" />
            <input name="salary" type="number" value={form.salary} onChange={handleChange} placeholder="Salary" />
            <div className="form-actions">
              <button className="btn primary" type="submit">Save</button>
              <button className="btn ghost" type="button" onClick={clear}>Clear</button>
            </div>
          </form>
        </aside>
      </main>
    </div>
  );
}

export default App;
