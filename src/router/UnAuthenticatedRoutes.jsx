import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "authMfe/login";
import VerifyOTPPage from "authMfe/verifyOTP";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/verify-otp" element={<VerifyOTPPage />} />

        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
