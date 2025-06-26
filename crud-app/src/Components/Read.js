import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  function getData() {
    Axios.get("https://685c05a389952852c2dbeb19.mockapi.io/crud").then(
      (res) => {
        setData(res.data);
      }
    );
  }

  const handleDelete = (id) => {
    Axios.delete(`https://685c05a389952852c2dbeb19.mockapi.io/crud/${id}`).then(
      (res) => {
        getData();
      }
    );
  };

  const setDataToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="bg-primary text-center">
            <h1>CRUD Operations</h1>
          </div>
          <div className="mb-2 mt-2">
            <Link to={"/create"}>
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>
          <table className="table table-bordered table-striped table-hover table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.c_name}</td>
                      <td>{item.c_age}</td>
                      <td>{item.c_email}</td>
                      <td>
                        <Link to={"/edit"}>
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              setDataToStorage(
                                item.id,
                                item.c_name,
                                item.c_age,
                                item.c_email
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (window.confirm("Are you sure"))
                              handleDelete(item.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Read;
