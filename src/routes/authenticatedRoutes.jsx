import { Route } from 'react-router-dom';
import { BrowserRouter,  Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import DashboardMfe from "dashboardMfe/app";
import CreateTemplatePage from "formbuilderMfe/createTemplate";

const AuthenticatedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route  path="/dashboard" element={<DashboardMfe />} /> */}
        <Route  path="/create-template" element={<CreateTemplatePage />} />
        <Route path="/*" element={<Navigate to="/create-template" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AuthenticatedRoutes;
