import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "authMfe/login";
import VerifyOTPPage from "authMfe/verifyOTP";
import DashboardPage from "dashboardMfe/app";
import CreateTemplatePage from "formbuilderMfe/createTemplatePage";
import FormsPage from "formbuilderMfe/formsPage";
import UsersPage from "userMfe/app";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={LoginPage} />

        <Route path="/verify-otp" Component={VerifyOTPPage} />

        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/forms" element={<FormsPage />} />

        <Route path="/users" element={<UsersPage />} />

        <Route path="/create-template" element={<CreateTemplatePage />} />

        <Route path="/*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
