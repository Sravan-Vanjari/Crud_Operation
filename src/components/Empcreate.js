import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Empcreate() {
    //    Values Declaration
    const[id,idchange] =useState("")
     const[name,namechange] =useState("")
     const[email,emailchange] =useState("")
     const[phone,phonechange] =useState("")
 


     const navigate=useNavigate();
    //    handle submit function
       const handlesubmit = (e)=>{
           e.preventDefault();
       const empdata={name,email,phone};
        fetch("http://localhost:8000/employee/",{
method :"POST",
headers:{"content-type":"application/json"},
body: JSON.stringify(empdata)
        }).then((res)=>{
            alert('Saved Successfully') ;
            navigate('/');
        }).catch((err)=>{
           console.log(err.message); 
        })
       }
           

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{textAlign:"left"}}>
              <div className="card-title">
                <h2> Employee Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                        <label>Id</label>
                        <input value={id} disabled ="disabled"  className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                        <label>Name</label>
                        <input required value={name} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                        <label>email</label>
                        <input  value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                        <label>Phone</label>
                        <input  value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                    </div>
                  </div>
               
                  <div className="col-lg-12">
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Save</button>
                        <Link to="/" className="btn btn-danger">Back </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Empcreate;
