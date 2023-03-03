import React from "react";
import Layout from "../Components/Layout/Layout";

import LoginForm from "../Components/Login/LoginForm";

function Login(props) {
  document.title = props.title + " - Carkhana";
  return (
    <>
      <Layout>
        <LoginForm />
      </Layout>
    </>
  );
}

export default Login;
