import React from "react";
import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
 import { v4 as uuidV4 } from "uuid";
import Navbar from "./Navbar";

function App() {

  return (
   <div className="app">
    <Navbar/>
    <div className="appContainer">
    <Router>
      <Routes>
        <Route path="/" exact element={ <Navigate to={`/documents/${uuidV4()}`} />}/>
        <Route path="/documents/:id" element={<TextEditor/>}/>
      </Routes>
    </Router>
    </div>
    </div>
  );
}
export default App;