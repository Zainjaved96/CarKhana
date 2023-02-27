import React from "react";
import Layout from "../Components/Layout";
import SignupForm from "../Components/SignupForm";
function Signup(props) {
  document.title = props.title + " - Carkhana";
  return (
    <>
      <Layout>
        <SignupForm />
      </Layout>
    </>
  );
}

export default Signup;
