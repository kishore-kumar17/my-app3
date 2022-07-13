import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Crud = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const [error, seterror] = useState({});

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
    } else if (data.employeeid && data.employeeid.length <= 5) {
      seterror({ employeeid: "COULD YOU PLEASE FOUR DIGITS ID" });
    } else if (!data.desi) {
      seterror({ desi: "Desigination is must" });
    } else {
      axios
        .post("http://localhost:8000/employees", data)
        .then((res) => {
          // alert("successfully submited..");
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/form");
    }
  };
  // console.log(data);
  return (
    <div className="background ">
      <Container>
        <Form onSubmit={(e) => submitHandler(e)} className="col-4 movedcenter">
          <h1>
            <i>USING</i> <u>CRUD</u> FORM
          </h1>
          <div>
            <Form.Label>
              <b>NAME</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              autoFocus
              placeholder="ENTER YOUR NAME"
              onChange={change}
            ></Form.Control>
          </div>
          <span style={{ color: "red" }}>{error.name}</span>
          <br />
          <div>
            <Form.Label>
              <b>FATHER'S NAME</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="fname"
              onChange={change}
              placeholder="ENTER YOUR FATHER'S NAME"
            ></Form.Control>
          </div>
          <span style={{ color: "red" }}>{error.fname}</span>
          <br />
          <div>
            <Form.Label>
              <b>AGE</b>
            </Form.Label>
            <Form.Control
              type="number"
              name="age"
              onChange={change}
            ></Form.Control>
          </div>
          <span style={{ color: "red" }}>{error.age}</span>
          <br />
          <div>
            <Form.Label>
              <b>EMAIL ID</b>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={change}
            ></Form.Control>
          </div>
          <span style={{ color: "red" }}>{error.email}</span>
          <br />
          <div>
            <Form.Label>
              <b>EMPLOYEE ID</b>
            </Form.Label>
            <br />
            <Form.Control
              type="number"
              name="employeeid"
              onChange={change}
            ></Form.Control>
          </div>
          <span style={{ color: "red" }}>{error.employeeid}</span>
          <br />
          <div>
            <Form.Label>
              <b>DESIGINATION</b>
            </Form.Label>
            <Form.Control
              type="text"
              name="desi"
              onChange={change}
              placeholder="DEVELOPER"
            ></Form.Control>
          </div>
          <span style={{ color: "red" }}>{error.desi}</span>
          <br />
          <div className="d-grid">
            <Button type="submit" variant="outline-danger">
              SIGN IN
            </Button>
          </div>
          <br />
        </Form>
      </Container>
    </div>
  );
};

export default Crud;
