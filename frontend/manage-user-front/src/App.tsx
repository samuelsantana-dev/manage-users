import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterForm from "./pages/RegisterUser";
import UsersTable from "./pages/UsersTable";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/users-table" element={<UsersTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
