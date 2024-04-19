import React from "react";

function Select() {
  return (
    <select id="service-select" className="form-select">
      <option selected>Select a service</option>
      <option value="Industrial">Industrial</option>
      <option value="Commercial">Commercial</option>
      <option value="Domestic">Domestic</option>
      <option value="Faults">Faults</option>
      <option value="Maintenance">Maintenance</option>
      <option value="Generators">Generators</option>
      <option value="Appliances">Appliances</option>
      <option value="Compliance Testing">Compliance Testing</option>
      <option value="HV Equipments">HV Equipments</option>
      <option value="Leads Process">Leads Process</option>
      <option value="Line Control Wiring">Line Control Wiring</option>
      <option value="Switch Boards">Switch Boards</option>
      <option value="Pumps">Pumps</option>
      <option value="Lighting">Lighting</option>
    </select>
  );
}

export default Select;
