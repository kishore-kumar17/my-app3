import logo from "./logo.svg";
import "./App.css";
import Functioncycle from "./Functioncycle";
import Example from "./Example";
import Portal from "./Portal";
import Usereducer from "./Usereducer";
import Fetch from "./Fetch";
import Exone from "./Exercies/Exone";
import Twoway from "./Exercies/Twoway";
import Extwo from "./Exercies/Extwo";
import Fetchmap from "./Fetchmap";
import Usecontxt from "./Usecontxt";
import Propsdrilling from "./Propsdrilling";
import Form from "./cred/Crud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crud from "./cred/Crud";
import Read from "./cred/Read";
import ReactDOM from "react-dom";
import Homecrud from "./cred/Homecrud";
function App() {
  return (
    <div>
      {/* <Functioncycle />  */}
      {/* <Twoway /> */}
      {/* <Example/>   */}
      {/* <Usereducer /> */}
      {/* <Fetch/>   */}
      {/* <Fetchmap /> */}
      {/* <Exone /> */}
      {/* <Extwo /> */}
      {/* <Usecontxt /> */}
      {/* <Propsdrilling /> */}

      {/* THIS WEEK */}
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homecrud />}></Route>
          <Route path="/api" element={<Crud />}></Route>
          <Route path="/form" element={<Read />}></Route>
          <Route path="/update"></Route>
          <Route path="/delete"></Route>
          <Route path="/overall"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// ReactDOM.createPortal

//   <Portal />,
// document.getElementById("rooot")
