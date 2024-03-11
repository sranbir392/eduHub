import { Route, Routes } from "react-router-dom";
import SigninForm from "../_auth/forms/SigninForm";
import SignUpForm from "../_auth/forms/SignUpForm";
import AuthLayout from "../_auth/AuthLayout";
import Homes from "../components/Homes";
import MainPage from "../components/MainPage";


function MainRouter() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/" element={<SignUpForm />} />
      </Route>
        <Route path="/home" element={<Homes />} />
        <Route path="/main" element={<MainPage />} />
         
    </Routes>
  );
}

export default MainRouter;
