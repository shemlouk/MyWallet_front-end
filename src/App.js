import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./hooks/AuthContext";
import AddRecord from "./pages/AddRecord";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import Home from "./pages/Home";

const App = () => {
  const [key, setKey] = useState();
  return (
    <AuthContext.Provider value={key}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn {...{ setKey }} />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nova-entrada" element={<AddRecord />} />
          <Route path="/nova-saida" element={<AddRecord />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
