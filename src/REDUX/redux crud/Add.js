import React from "react";
import { Button, Container, Form } from "react-bootstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const Add = () => {
  const tost = () => {
    toast.success("ADDED SUCCESSFULLY...!",{autoClose:6000});
  };

  return (
  
    <div className="background-image">
      <h1 className="clr">This is Add book component</h1>
      <Container className="border">
        <row>
        <Form className="top">
          <div>
            <Form.Label className="clr">BOOK NAME :</Form.Label>
            <Form.Control
              name="bookname"
              placeholder="BOOK NAME"
              type="text"
              autoFocus
            ></Form.Control>
          </div>
          <br />
          <div>
            <Form.Label className="clr"> AUTHORS :</Form.Label>
            <Form.Control
              type="text"
              placeholder="AUTHORS NAME"
              name="authors"
            ></Form.Control>
          </div>
          <br />
          <div>
            <Form.Label className="clr">BOOK PRICE : </Form.Label>
            <Form.Control
              type="number"
              placeholder="$20"
              name="price"
            ></Form.Control>
          </div>
          <br />
          <div>
            <Form.Label className="clr">NUMBER OF PAGES : </Form.Label>
            <Form.Control
              type="number"
              placeholder="120"
              name="pages"
            ></Form.Control>
          </div>
          <br />
          <div>
            <Button variant="outline-dark" className="float-end" onClick={tost}>
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
