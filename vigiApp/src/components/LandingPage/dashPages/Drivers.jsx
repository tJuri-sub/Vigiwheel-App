import React from "react";
import { DriverList } from "../../Drivers/DriverList";
import DriversForm from "../../Drivers/DriverForm";

function Drivers() {
  return (
    <div className="p-8 ">
      <h1 className="text-3xl border-b-2">Drivers</h1>
      <div>
        <DriversForm />
        <DriverList />
      </div>
    </div>
  );
}

export default Drivers;
