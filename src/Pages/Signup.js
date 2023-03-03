import React from "react";
import Layout from "../Components/Layout/Layout";
import SignupForm from "../Components/Signup/SignupForm";
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
