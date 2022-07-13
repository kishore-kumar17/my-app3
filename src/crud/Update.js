import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [data, setdata] = useState({});
  const [fetch, setfetch] = useState(false);
  const [fetchErr, setFetchErr] = useState();
  const [error, seterror] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/employees/${id}`)
      .then((response) => {
        setdata(response.data);
        setfetch(true);
      })
      .catch((error) => {
        setFetchErr("Page error");
      });
  }, []);

  const change = (e) => {

    
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
    if (!e.target.value) {
      seterror({
        ...error,
        [e.target.name]: `${e.target.name} can't be blank`,
      });
    } else {
      seterror({ ...error, [e.target.name]: "" });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!data.name) {
      seterror({ name: "Name is must" });
    } else if (!data.fname) {
      seterror({ fname: "Father name is must" });
    } else if (!data.age) {
      seterror({ age: "Age is must" });
    } else if (data.age && data.age <= 16) {
      seterror({ age: "child labour so you are NOT ALLOWED" });
    } else if (!data.email) {
      seterror({ email: "Email is must" });
    } else if (!data.employeeid) {
      seterror({ employeeid: "Employee Id is must" });
    } else if (data.employeeid && data.employeeid.length <= 5 ) {
      seterror({ employeeid: "COULD YOU PLEASE FIVE DIGITS ID" });
    } else if (!data.desi) {
      seterror({ desi: "Desigination is must" });
    } 
    // else if (!data.switch) {
    //   seterror({ switch: "switch on please" });
    // } 
    else {
      axios
        .put(`http://localhost:8000/employees/${id}`, data)
        .then((res) => {
          alert("UPDATED successfully !!!.");
          navigate("/form");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // console.log(data);
  return fetch ? (
    <div className="background">
      <Container>
        <Form className="data col-6" onSubmit={(e) => submitHandler(e)}>
          <h1>
            <i>USING</i> <u>CRUD</u> FORM
          </h1>
          <div className="mt-3">
            <Form.Label>
              <b>NAME</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={data.name}
              autoFocus
              placeholder="ENTER YOUR NAME"
              onChange={change}
            ></Form.Control>
          </div>
          <span style={{ color: "yellow" }}>{error.name}</span>
          <br />
          <div className="mt-3">
            <Form.Label>
              <b>FATHER'S NAME</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={data.fname}
              onChange={change}
              placeholder="ENTER YOUR FATHER'S NAME"
            ></Form.Control>
          </div>
          <span style={{ color: "yellow" }}>{error.fname}</span>
          <br />
          <div className="mt-3">
            <Form.Label>
              <b>AGE</b>
            </Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={data.age}
              onChange={change}
            ></Form.Control>
          </div>
          <span style={{ color: "yellow" }}>{error.age}</span>
          <br />
          <div className="mt-3">
            <Form.Label>
              <b>EMAIL ID</b>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={data.email}
              onChange={change}
            ></Form.Control>
          </div>
          <span style={{ color: "yellow" }}>{error.email}</span>
          <br />
          <div className="mt-3">
            <Form.Label>
              <b>EMPLOYEE ID</b>{" "}
            </Form.Label>
            <br />
            <Form.Control
              type="number"
              name="employeeid"
              value={data.employeeid}
              onChange={change}
            ></Form.Control>
          </div>
          <span style={{ color: "yellow" }}>{error.employeeid}</span>
          <br />
          <div className="mt-3">
            <Form.Label>
              <b>DESIGINATION</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="desi"
              value={data.desi}
              onChange={change}
              placeholder="DEVELOPER"
            ></Form.Control>
          </div>
          <span style={{ color: "yellow" }}>{error.desi}</span>
          <br />
          {/* <span>
            <b style={{ color: "red" }}>
              ARE YOU SURE CHANGE THE UPDATE
              <Form.Check
                type="switch"
                name="switch"
                // value={data.switch}
              ></Form.Check>
            </b>
            <span style={{ color: "yellow" }}>{error.switch}</span>
          </span> */}
          <div className="d-grid">
            <Button
              type="submit"
              variant="outline-danger"
              // onClick={(e) => submitHandler(e)}
            >
              UPDATED
            </Button>
          </div>
          <br />
        </Form>
      </Container>
    </div>
  ) : (
    <h1>{fetchErr}</h1>
  );
};

export default Update;
