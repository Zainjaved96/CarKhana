import React from "react";
import ContactForm from "../Components/Contact/ContactForm";
import Layout from "./../Components/Layout/Layout";
function Contact(props) {
  document.title = props.title + " - Carkhana";
  return (
    
    <>
      <Layout>
        <ContactForm />
      </Layout>
    </>
  );
}

export default Contact;
