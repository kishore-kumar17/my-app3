import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./Global";

const Formcontext = () => {
  const { Addcard, card } = useContext(GlobalContext);
  const nav = useNavigate("");
  const [name, setname] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [cvvnumber, setcvvnumber] = useState("");
  const [data, setdata] = useState("");
  const [error, seterror] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();

    // console.log(name)
    const newcard = {
      id: card.length + 1,
      name,
      cardnumber,
      cvvnumber,
    };
    Addcard(newcard);
    nav("/view");
  };

  return (
    <div className="contextbackimage">
      <h1 style={{ textAlign: "center" }}>
        crud using <b>Context</b> method
      </h1>
      <div>
        <Container className="col-4">
          <Form onSubmit={submitHandeler} className="center">
            <h2 style={{ textAlign: "center", color: "red" }}>
              {" "}
              INDUSIND BANK{" "}
            </h2>
            <br />
            <h2 style={{ textAlign: "center" }}>PLATINUM CARD</h2>
            <br />
            <div>
              <Form.Label> CARD HOLDER NAME:</Form.Label>
              <Form.Control
                name="name"
                placeholder="Enter your name"
                autoFocus
                type="text"
                onChange={(e) => setname(e.target.value)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Form.Label>CARD NUMBER :</Form.Label>
              <Form.Control
                name="cardnumber"
                placeholder="Enter your card number"
                type="text"
                pattern="\d{16}"
                maxLength={16}
                onChange={(e) => setcardnumber(e.target.value)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Form.Label>CVV NUMBER :</Form.Label>
              <Form.Control
                name="cvvnumber"
                placeholder="Enter your CVV number"
                type="text"
                pattern="\d{4}"
                maxLength={4}
                // pattern="\d{3,4}"
                onChange={(e) => setcvvnumber(e.target.value)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Button type="submit">submit</Button>
            </div>
            <br />
          </Form>
        </Container>
      </div>
      <div>
        <h6>Customer service: 1860 267 7777</h6>
        <br />
        <p>Founder : kishore kumar D</p>
        <br />
        <h4>copyrights@2027-kishore</h4>
        <hr />
      </div>
    </div>
  );
};

export default Formcontext;
