import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Edit() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  },[]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://685c05a389952852c2dbeb19.mockapi.io/crud/${id}`, {
        c_name: name,
        c_age: age,
        c_email: email,
      })
      .then((res) => {
        setName("");
        setAge("");
        setEmail("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="mb-2 mt-2">
          <Link to={"/"}>
            <button className="btn btn-primary">Go Back to List</button>
          </Link>
        </div>
        <div className="bg-primary p-4 text-center">
          <h1>Update Data</h1>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="from-group">
            <label htmlFor="name">Enter Name: </label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="from-group">
            <label htmlFor="age">Enter Age: </label>
            <input
              type="number"
              placeholder="Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="from-group">
            <label htmlFor="email">Enter Email: </label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="d-grid">
            <input type="submit" value="update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
