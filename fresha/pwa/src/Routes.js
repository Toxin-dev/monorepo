import {
  Signin,
  Login,
  BusinessSettingPage,
  ClientManagePage,
  Signup,
} from "./pages";
import { ProfilePage } from "./pages/ProfilePage";
export const routes = [
  { path: "/", element: <Signin /> },
  { path: "user/sign-in/", element: <Login /> },
  { path: "setup/", element: <BusinessSettingPage /> },
  { path: "clients/list", element: <ClientManagePage /> },
  { path: "profile/settings", element: <ProfilePage /> },
  { path: "user/sign-up", element: <Signup /> },
];
