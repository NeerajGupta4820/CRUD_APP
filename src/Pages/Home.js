import React, { useState } from 'react'
const Home = () => {
  const [inputs,setInputs]=useState(
    {
      name:"",
      email:"",
      phone:"",
    }
  );
  const [alldata,setAlldata]=useState([])
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  
  
const handleChange=(e)=>{
  setInputs({
    ...inputs,
    [e.target.name]:e.target.value,
  });
};
const handleSubmit=(e)=>{
   e.preventDefault();
   if (editClick) {
    const tempTableData = alldata;
    Object.assign(tempTableData[editIndex], inputs);
    setAlldata([...tempTableData]);
    setEditClick(false);
    setInputs({
      name: "",
      email: "",
      phone:"",
    });
  } else {
    setAlldata([...alldata, inputs]);
    setInputs({
      name: "",
      email: "",
      phone:"",
    });
  }
};
const handleDelete = (index) => {
  const filterData = alldata.filter((item, i) => i !== index);
  setAlldata(filterData);
};
const handleEdit = (index) => {
  const tempData = alldata[index];

  setInputs({ name: tempData.name, email: tempData.email,phone:tempData.phone });
  setEditClick(true);
  setEditIndex(index);
};
  return (
    
    <div className='app'>
      <h1 className='heading'>User Management</h1>
      <div className='main '>
        
          <form onSubmit={handleSubmit}>
          <h2>{editClick ? "Update user details" : "Add new user"}</h2>
          <div >
            <label>Name:</label><br></br>
            <input type="text"   className="form-control" name="name" value={inputs.name} onChange={handleChange}  required />
        </div>
        <div >
          <label>Email:</label><br></br>
          <input type="email"   className="form-control"  name="email" value={inputs.email} onChange={handleChange} required />
        </div>
        <div >
          <label>Phone number:</label><br></br>
          <input type="text"   className="form-control"  name="phone" value={inputs.phone} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary" > {editClick ? "update" : "Add"}</button>
          </form>
      
        <div  id='test'>
          <table className='table'>
            <thead>
              <tr>
                <th className='th'>Name</th>
                <th className='th'>Email</th>
                <th className='th'>Phone no.</th>
                <th className='th'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                alldata.map((item,i)=>(
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button className="btn btn-primary ms-2" onClick={() => handleEdit(i)}>Edit</button>
                      <button onClick={()=>handleDelete(i)} className="btn btn-danger ms-2">Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
