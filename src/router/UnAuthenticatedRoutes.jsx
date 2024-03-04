import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "authMfe/login";
import VerifyOTPPage from "authMfe/verifyOTP";
import ForgotPasswordPage from "authMfe/forgotPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/verify-otp" element={<VerifyOTPPage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
