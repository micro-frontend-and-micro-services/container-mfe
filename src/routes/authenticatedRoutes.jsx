import { Route } from 'react-router-dom';
import { BrowserRouter,  Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import DashboardMfe from "dashboardMfe/app";
import FormbuilderMfe from "formbuilderMfe/app";

const AuthenticatedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/formbuilder/*" element={<FormbuilderMfe />} />
        <Route  path="/dashboard" element={<DashboardMfe />} />
        <Route path="/*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AuthenticatedRoutes;
