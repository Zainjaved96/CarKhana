import React from "react";
import ContactForm from "../Components/ContactForm";
import Layout from "./../Components/Layout";
function Contact(props) {
  document.title = "Contact - Carkhana";
  return (
    <>
      <Layout>
        <ContactForm />
      </Layout>
    </>
  );
}

export default Contact;
