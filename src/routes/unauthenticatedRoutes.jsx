import { BrowserRouter,   Routes } from 'react-router-dom';
// import LoginPage from "authMfe/login";
// import VerifyOTPPage from "authMfe/verifyOTP";
// import { Navigate } from 'react-router-dom';

const UnAuthenticatedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/verify-otp" Component={VerifyOTPPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/*" element={<Navigate to="/login" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default UnAuthenticatedRoutes;
