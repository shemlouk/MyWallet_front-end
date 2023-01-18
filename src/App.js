import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseForm from "./pages/ExpenseForm";
import IncomeForm from "./pages/IncomeForm";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nova-entrada" element={<IncomeForm />} />
        <Route path="/nova-saida" element={<ExpenseForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
