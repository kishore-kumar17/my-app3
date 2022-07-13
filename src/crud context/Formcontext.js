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
  // const [data,setdata]=useState('');
  // const [error,seterror]=useState('');

  // const change = (e) => {
  //   e.preventDefault();
  // };

  const submitHandeler = (e) => {
    e.preventDefault();
    // if(!name){
    //   seterror({name:'name is must'})
    // }
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
      <h1 style={{ textAlign: "center" }}>crud using Context method</h1>
      <div>
        <Container className="col-4">
          <Form onSubmit={submitHandeler} className="center">
            <h2 style={{ textAlign: "center", color: "red" }}>
              {" "}
              MARIAMMAN INDIAN BANK{" "}
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
              {/* <span>{error}</span> */}
            </div>
            <br />
            <div>
              <Form.Label>CARD NUMBER :</Form.Label>
              <Form.Control
                name="cardnumber"
                placeholder="Enter your card number"
                type="number"
                onChange={(e) => setcardnumber(e.target.value)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Form.Label>CVV NUMBER :</Form.Label>
              <Form.Control
                name="cvvnumber"
                placeholder="Enter your CVV number"
                type="number"
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
        <p>Founder : kishore kumar D</p>
        <h4>copyrights@2027-kishore</h4>
      </div>
    </div>
  );
};

export default Formcontext;
