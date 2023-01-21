import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseForm from "./pages/ExpenseForm";
import AuthContext from "./hooks/AuthContext";
import IncomeForm from "./pages/IncomeForm";
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
          <Route path="/nova-entrada" element={<IncomeForm />} />
          <Route path="/nova-saida" element={<ExpenseForm />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
