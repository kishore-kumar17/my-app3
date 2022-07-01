import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Crud = () => {
  const [data,setdata] = useState({});
  const change=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  console.log(data)
    return (
    <div className="background">
      <Container >
        <Form className="data col-6">
          <h1> <i>USING</i> <u>CRUD</u> FORM</h1>
          <div className="mt-3">
            <Form.Label><b>NAME</b></Form.Label>
            <Form.Control type="text"
            name="name" autoFocus
            placeholder="enteryour name" onChange={change}></Form.Control>
          </div>
          <br />
          <div className="mt-3">
            <Form.Label><b>FATHER'S NAME</b></Form.Label>
            <Form.Control type="text" name="fname" onChange={change}></Form.Control>
          </div>
          <br />
          <div className="mt-3">
            <Form.Label><b>AGE</b></Form.Label>
            <Form.Control type="number" name="age" onChange={change}></Form.Control>
          </div>
          <br />
          <div className="mt-3">
            <Form.Label><b>EMAIL ID</b></Form.Label>
            <Form.Control type="email" name="email" onChange={change}></Form.Control>
          </div>
          <br />
          <div className="mt-3">
            <Form.Label><b>EMPLOYEE ID</b> </Form.Label>
            <br />
            <Form.Control type="number" name="employeeid" onChange={change}></Form.Control>
          </div>
          <br />
          <div className="mt-3">
            <Form.Label><b>DESIGINSTION</b></Form.Label>
            <Form.Control type="text" name="desi" onChange={change}></Form.Control>
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
