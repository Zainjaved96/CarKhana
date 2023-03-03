import React from "react";
import Layout from "../Components/Layout/Layout";
import VehicleSearch from "../Components/Vehicles/VehicleSearch";

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
