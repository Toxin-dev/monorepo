import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Layout from "./component/common/Layout";
import {
  Login,
  Signin,
  Signup,
  ProfilePage,
  ClientManagePage,
  HomePage,
  BusinessSettingPage,
} from "./pages";

const auth_sign_in = (
  <Route path="/" element={<Signin />}>
    <Route path="/sign-in" element={<Login />} />
    <Route path="/sign-up" element={<Signup />} />
  </Route>
);

const auth_logged_in = (
  <Route path="/" element={<Layout />}>
    <Route path="/setup" element={<BusinessSettingPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/client" element={<ClientManagePage />} />
    <Route path="/home" element={<HomePage />} />
  </Route>
);
let route = auth_sign_in;
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>{route}</Routes>
    </div>
  );
}

export default App;
