import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Read = () => {
  const second = {
    loding: true,
    post: {},
    error: "",
  };

  const first = (state, action) => {
    switch (action.type) {
      case "pass":
        return {
          loding: false,
          post: action.answer,
          error: "",
        };
      case "fail":
        return {
          loding: false,
          post: {},
          error: "somenting went worng!!!...",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(first, second);

  useEffect(() => {
    axios
      .get("http://localhost:8000/employees") //my API
      .then((res) => {
        dispatch({
          type: "pass",
          error: "",
          answer: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "fail",
          error: "",
          post: {},
        });
      });
  }, []); //no dependency...
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Welcome to My Crud operation</h1>
      <Container>
        <Table>
          <thead>
            <tr>
              <td>id</td>
              <td>NAME</td>
              <td>AGE</td>
              <td>MAIL ID</td>
              <td>DESIGINATION</td>
              <td>EMPLOYEE ID</td>
            </tr>
          </thead>
          {state.post.length > 0 &&
            state.post.map((mapapi) => {
              return (
                <tbody>
                  <tr>
                    <td>{mapapi.id}</td>
                    <td>{mapapi.name}</td>
                    <td>{mapapi.age}</td>
                    <td>{mapapi.email}</td>
                    <td>{mapapi.desi}</td>
                    <td>{mapapi.employeeid}</td>
                  </tr>
                </tbody>
              );
            })}
        </Table>
        <Link to="/api">
          <Button variant="warning col-3">C for (create) </Button>
        </Link>
        <Link to="/form">
          <Button variant="outline-success col-3">R for (read) </Button>
        </Link>
        <Link to="/update">
          <Button variant="outline-secondary col-3">U for (update) </Button>
        </Link>
        <Link to="/delete">
          <Button variant="danger col-3">D for (delete) </Button>
        </Link>
      </Container>
      <br />
      <marquee>THANK YOU VISIT AGAIN</marquee>
    </div>
  );
};

export default Read;
