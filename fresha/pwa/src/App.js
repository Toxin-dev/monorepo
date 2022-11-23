import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { Login, Signin, Signup } from "./pages";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
