import Layout from "layoutMfe/app";
import style from "./app.module.css";

import AuthMfe from "authMfe/app";
// import UserMfe from "userMfe/App";
// import FormbuilderMfe from "formbuilderMfe/App";

function App() {
  return (
    <Layout>
      <div className={style.contentContainer}><AuthMfe/></div>
    </Layout>
  );
}

export default App;
