import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Account from "./components/Account";
import Newbill from "./components/Newbill";
import HomeScreen from "./HomeScreen";
import Personal from "./components/Personal";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/login" element={<Account />}></Route>
        <Route path="/newbill" element={<Newbill />}></Route>

        <Route path="/profile" element={<Personal />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
