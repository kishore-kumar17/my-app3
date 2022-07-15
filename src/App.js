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
import Form from "./crud/Crud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crud from "./crud/Crud";
import Read from "./crud/Read";
import ReactDOM from "react-dom";
import Homecrud from "./crud/Homecrud";
import Update from "./crud/Update";
import HocHome from "./HOC/HocHome";
import Exthree from "./Exercies/Exthree";
import Formcontext from "./crud context/Formcontext";
import Global from "./crud context/Global";
import View from "./crud context/View";
import Updates from "./crud context/Update";
import Createredux from "./REDUX/Createredux";
import Add from "./REDUX/redux crud/Add";

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
      {/* <Exthree/> */}
      {/* <Usecontxt /> */}
      {/* <Propsdrilling /> */}
      {/* THIS WEEK */}
      <BrowserRouter>
        <Global>
          <Routes>
            <Route path="/" element={<Homecrud />}></Route>
            <Route path="/api" element={<Crud />}></Route>
            <Route path="/form" element={<Read />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
            <Route path="/Hoc" element={<HocHome />}></Route>
            <Route path="/context" element={<Formcontext />}></Route>
            <Route path="/view" element={<View />}></Route>
            <Route path="/updatee/:id" element={<Updates  />}></Route>
            <Route path="/reduxadd" element={<Add />}></Route>
          </Routes>
        </Global>
      </BrowserRouter>
    </div>
  );
}

export default App;

// ReactDOM.createPortal

//   <Portal />,
// document.getElementById("rooot")
