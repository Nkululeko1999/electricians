import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Input from "./Input";
import Select from "./Select";



function BuildForm() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let emailFailed = false;
    try {
      const response = await axios.post(
        "https://electricians-api.onrender.com/api/auto-responder/send-message",
        formData
      );

      console.log("Success:", response.data);
      toast.success(response.data.message);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with error data:", error.response.data);
        if (error.response.data.message === "Email format is not correct.") {
          emailFailed = true;
        }
        toast.error(error.response.data.message);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error occurred during request setup:", error.message);
      }
    }
    if (!emailFailed) {
      setFormData({ fName: "", lName: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <Input 
            type="text"
            name="fName"
            placeholder="First Name"
            value={formData.fName}
            onChange={handleChange}

        />
      </div>
      <div className="mb-3">
        <Input 
            type="text"
            name="lName"
            placeholder="Last Name"
            value={formData.lName}
            onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <Input 
            type="email"
            name="email"
            placeholder="Email"
            value={formData.lName}
            onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <Select />
      </div>
      <div className="mb-3">
        <Input 
            type="phone"
            name="phone"
            placeholder="Phone"
            value={formData.lName}
            onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Send Message
      </button>
    </form>
  );
}

export default BuildForm;
