import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import {
  BusinessSettingPage,
  Login,
  Signin,
  Signup,
  ProfilePage,
  ClientManagePage,
  HomePage,
} from "./pages";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/user/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/setup" element={<BusinessSettingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/client" element={<ClientManagePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
