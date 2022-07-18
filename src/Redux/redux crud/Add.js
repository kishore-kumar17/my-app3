import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Add = () => {
  const tost = () => {
    toast.success("ADDED SUCCESSFULLY...!", { autoClose: 6000 });
  };
  const dispatch = useDispatch();
  const [input, setinput] = useState({});
  const [error, seterror] = useState({});//validation error

  const change = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = {
      bookname: input.name,
      authors: input.authors,
      price: input.price,
      pages: input.pages,
    };
    dispatch({ type: "addbook", payload: val });
    tost();
    console.log(val);
  };

  return (
    <div className="background-image">
      <h1 className="clr">This is Add book component</h1>
      <Container className="col-4">
        <row>
          <Form className="top">
            <div>
              <Form.Label className="clr">BOOK NAME :</Form.Label>
              <Form.Control
                name="bookname"
                placeholder="BOOK NAME"
                type="text"
                autoFocus
                onChange={(e) => change(e)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Form.Label className="clr"> AUTHORS :</Form.Label>
              <Form.Control
                type="text"
                placeholder="AUTHORS NAME"
                name="authors"
                onChange={(e) => change(e)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Form.Label className="clr">BOOK PRICE : </Form.Label>
              <Form.Control
                type="number"
                placeholder="$20"
                name="price"
                onChange={(e) => change(e)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Form.Label className="clr">NUMBER OF PAGES : </Form.Label>
              <Form.Control
                type="number"
                placeholder="120"
                name="pages"
                onChange={(e) => change(e)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Button
                variant="outline-dark"
                className="float-end"
                onClick={tost}
                onSubmit={(e) => handleSubmit(e)}
              >
                ADD TO LIBRARY
              </Button>
            </div>
            <br />
          </Form>
        </row>
      </Container>
      <br />
    </div>
  );
};

export default Add;
