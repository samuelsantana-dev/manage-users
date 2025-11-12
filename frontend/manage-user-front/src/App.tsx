import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterForm from "./pages/RegisterUser";
import UsersTable from "./pages/UsersTable";
import Header from "./components/Header";
import { AuthProvider } from "./context/Context";
import type { AuthContextType } from "./types/User";

function App() {
const authValue: AuthContextType = {
    user: {
      id: "1",
      name: "Samuel Santana",
      email: "samuel@email.com",
    },
    setUser: (user) => console.log("Novo usuário:", user),
  };

  return (
    <>
      <AuthProvider value={authValue}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<RegisterForm />} />
            <Route path="/users-table" element={<UsersTable />} />
          </Routes>
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}

export default App;
