import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "./Global";

const Updates = () => {
  const { card, editcard } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    id: null,
    name: "",
    cardnumber: "",
    cvvnumber: "",
  });
  let { id } = useParams();
  useEffect(() => {
    const data = card.find((usemap) => usemap.id === parseInt(id));
    setdata(data);
  }, [id, card]);
  const submitHandeler = (e) => {
    e.preventDefault();
    editcard(data);
    navigate("/view");
  };

  const change = (input, newinput) => setdata({ ...data, [input]: newinput });

  if (!data || !data.id) {
    return <div>invalid card id</div>;
  }

  return (
    <div className="contextbackimage">
      <h1 style={{ textAlign: "center" }}>Update function</h1>
      <div>
        <Container className="col-3">
          <Form onSubmit={submitHandeler} className="center">
            <h2 style={{ textAlign: "center", color: "red" }}>
              {" "}
              INDUSIND BANK{" "}
            </h2>
            <br />
            <h2 style={{ textAlign: "center" }}>PLATINUM CARD</h2>
            <br />
            <img
              src="https://us.123rf.com/450wm/prettyvectors/prettyvectors1310/prettyvectors131000010/23010663-sim-card.jpg?ver=6"
              style={{ height: "100px" }}
              alt="sim-logo"
              title="INDUSIND BANK BAR PIN CODE"
            ></img>
            <div>
              <Form.Label> CARD HOLDER NAME:</Form.Label>
              <Form.Control
                name="name"
                placeholder="Enter your name"
                type="text"
                value={data.name}
                onChange={(e) => change("name", e.target.value)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Form.Label>CARD NUMBER :</Form.Label>
              <Form.Control
                name="cardnumber"
                placeholder="Enter your card number"
                type="number"
                value={data.cardnumber}
                onChange={(e) => change("cardnumber", e.target.value)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Form.Label>CVV NUMBER :</Form.Label>
              <Form.Control
                name="cvvnumber"
                placeholder="Enter your CVV number"
                type="number"
                value={data.cvvnumber}
                onChange={(e) => change("cvvnumber", e.target.value)}
              ></Form.Control>
            </div>
            <br />
            <div>
              <Button type="submit" variant="danger">
                UPDATE
              </Button>
            </div>

            <br />
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Updates;
