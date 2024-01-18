import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import AuthMfe from "authMfe/app";
// import { Navigate } from 'react-router-dom';

const UnAuthenticatedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" Component={AuthMfe} />
        {/* <Route path="/*" element={<Navigate to="/auth/login" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default UnAuthenticatedRoutes;
