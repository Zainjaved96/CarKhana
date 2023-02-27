import React from "react";
import Layout from "../Components/Layout";
import VehicleSearch from "../Components/VehicleSearch";

function Vehicles(props) {
  document.title = props.title + " - Carkhana";
  return (
    <>
      <Layout>
        <VehicleSearch />
      </Layout>
    </>
  );
}

export default Vehicles;
