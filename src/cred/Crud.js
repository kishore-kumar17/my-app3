import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Crud = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const change = (e) => {
    e.preventDefault();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   axios.get("http://localhost:8000/employees").then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/employees", data)
      .then((res) => {
        alert("successfully submited..");
      })
      .catch((error) => {
        alert('SOMTHING WENT WORNG!!!');
      });
    navigate("/form");
  };
  // console.log(data);
  return (
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
              autoFocus
              placeholder="ENTER YOUR NAME"
              onChange={change}
            ></Form.Control>
          </div>
          <br />
          <div className="mt-3">
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
          <br />
          <div className="mt-3">
            <Form.Label>
              <b>AGE</b>
            </Form.Label>
            <Form.Control
              type="number"
              name="age"
              onChange={change}
            ></Form.Control>
          </div>
          <br />
          <div className="mt-3">
            <Form.Label>
              <b>EMAIL ID</b>
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={change}
            ></Form.Control>
          </div>
          <br />
          <div className="mt-3">
            <Form.Label>
              <b>EMPLOYEE ID</b>{" "}
            </Form.Label>
            <br />
            <Form.Control
              type="number"
              name="employeeid"
              onChange={change}
            ></Form.Control>
          </div>
          <br />
          <div className="mt-3">
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
