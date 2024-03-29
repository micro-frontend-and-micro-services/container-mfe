import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "dashboardMfe/app";
import SubmittedFormListPage from "dashboardMfe/SubmittedFormList";

import UserListPage from "userMfe/UserListPage";
import UserProfilePage from "userMfe/UserProfilePage";
import UserDetailsPage from "userMfe/UserDetailsPage";
import TemplateListPage from "formbuilderMfe/TemplateListPage";
import FormListPage from "formbuilderMfe/FormListPage";
import CreateTemplatePage from "formbuilderMfe/CreateTemplatePage";
import CreateFormPage from "formbuilderMfe/CreateFormPage";
import UpdateTemplatePage from "formbuilderMfe/UpdateTemplatePage";
import UpdateFormPage from "formbuilderMfe/UpdateFormPage";

const Dashboard = DashboardPage ? DashboardPage : <div>loading</div>;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/form" element={<FormListPage />} />

        <Route path="/user" element={<UserListPage />} />

        <Route path="/template" element={<TemplateListPage />} />

        <Route path="/create-form" element={<CreateFormPage />} />

        <Route path="/create-template" element={<CreateTemplatePage />} />

        <Route path="/update-form" element={<UpdateFormPage />} />

        <Route path="/update-template" element={<UpdateTemplatePage />} />

        <Route path="/submitted-form" element={<SubmittedFormListPage />} />

        <Route path="/user-profile" element={<UserProfilePage />} />

        <Route path="/user-details" element={<UserDetailsPage />} />

        <Route path="/*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
