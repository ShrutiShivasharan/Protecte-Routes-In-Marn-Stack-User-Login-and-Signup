import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn";
import Header from "./pages/Header";
import Product from "./pages/Product";
import { AuthProvider } from "./context/AuthContext";
import Protect from "./ProtectedRoutes/Protect";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            {/* <Route path="/product" element={<Product />} /> */}
            <Route path="/product" element={<Protect><Product /></Protect>} />
            <Route path="/category" />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};


export default App;
