import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "authMfe/login";
import VerifyOTPPage from "authMfe/verifyOTP";
import DashboardPage from "dashboardMfe/app";
import UserListPage from "userMfe/app";

import TemplateListPage from "formbuilderMfe/TemplateListPage";
import FormListPage from "formbuilderMfe/FormListPage";
import CreateTemplatePage from "formbuilderMfe/CreateTemplatePage";
import CreateFormPage from "formbuilderMfe/CreateFormPage";

const Dashboard=DashboardPage?DashboardPage:<div>loading</div>

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />

        <Route path="/verify-otp" element={<VerifyOTPPage/>} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/form" element={<FormListPage />} />

        <Route path="/user" element={<UserListPage />} />

        <Route path="/template" element={<TemplateListPage />} />

        <Route path="/create-form" element={<CreateFormPage />} />

        <Route path="/create-template" element={<CreateTemplatePage />} />

        <Route path="/*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
