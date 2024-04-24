import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingButton from "../buttons/LoadingButton";

function BuildForm() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const invalidFields = [];
    for (const field in formData) {
      if (formData[field].trim() === "") {
        invalidFields.push(field);
      }
    }

    if (invalidFields.length > 0) {
      setInvalidFields(invalidFields);
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "https://electricians-service.vercel.app/build-with-us",
        formData
      );

      const data = response.data;

      if (data.success === false) {
        toast.error(data.message);
        setLoading(false);

        setFormData({
          fName: "",
          lName: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });

        return;
      }

      setLoading(false);
      toast.success(data.message);

      setFormData({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className={`mb-3 ${invalidFields.includes("fName") && "has-error"}`}>
        <input
          type="text"
          name="fName"
          placeholder="First Name"
          value={formData.fName}
          onChange={handleChange}
          className={`form-control input-outline ${
            invalidFields.includes("fName") && "invalid"
          }`}
          required
        />
        {invalidFields.includes("fName") && (
          <div className="invalid-feedback">Please enter your first name.</div>
        )}
      </div>

      <div className={`mb-3 ${invalidFields.includes("lName") && "has-error"}`}>
        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          value={formData.lName}
          onChange={handleChange}
          className={`form-control input-outline ${
            invalidFields.includes("lName") && "invalid"
          }`}
          required
        />
        {invalidFields.includes("lName") && (
          <div className="invalid-feedback">Please enter your last name.</div>
        )}
      </div>

      <div className={`mb-3 ${invalidFields.includes("email") && "has-error"}`}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`form-control input-outline ${
            invalidFields.includes("email") && "invalid"
          }`}
          required
        />
        {invalidFields.includes("email") && (
          <div className="invalid-feedback">
            Please enter a valid email address.
          </div>
        )}
      </div>

      <div className={`mb-3 ${invalidFields.includes("phone") && "has-error"}`}>
        <input
          type="phone"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className={`form-control input-outline ${
            invalidFields.includes("phone") && "invalid"
          }`}
          required
        />
        {invalidFields.includes("phone") && (
          <div className="invalid-feedback">
            Please enter a valid phone number.
          </div>
        )}
      </div>

      <div
        className={`mb-3 ${
          invalidFields.includes("projectType") && "has-error"
        }`}
      >
        <select
          id="service-select"
          className={`form-select ${
            invalidFields.includes("projectType") && "invalid"
          }`}
          aria-label="Select a service"
          name="projectType"
          onChange={handleChange}
          required
        >
          <option>Select a service</option>
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
        {invalidFields.includes("projectType") && (
          <div className="invalid-feedback">Please select a service.</div>
        )}
      </div>

      <div
        className={`mb-3 ${invalidFields.includes("message") && "has-error"}`}
      >
        <textarea
          className={`form-control ${
            invalidFields.includes("message") && "invalid"
          }`}
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        ></textarea>
        {invalidFields.includes("message") && (
          <div className="invalid-feedback">Please enter your message.</div>
        )}
      </div>

      {loading ? (
        <LoadingButton />
      ) : (
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      )}
    </form>
  );
}

export default BuildForm;
