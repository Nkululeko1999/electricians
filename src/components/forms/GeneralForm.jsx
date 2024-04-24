import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingButton from "../buttons/LoadingButton";

function GeneralForm() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [invalidFields, setInvalidFields] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // Email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  useEffect(() => {
    if (!loading) {
      // Reset form fields when loading state changes back to false
      setFormData({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const invalidFields = [];
    for (const field in formData) {
      if (formData[field].trim() === "") {
        invalidFields.push(field);
      }
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      invalidFields.push("email");
    }

    setInvalidFields(invalidFields);

    if (invalidFields.length > 0) {
      toast.error("Please fill in all fields correctly.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://electricians-service.vercel.app/general-inquiry",
        formData
      );

      const data = response.data;

      if (data.success === false) {
        toast.error(data.message);
        
        setFormData({
          fName: "",
          lName: "",
          email: "",
          phone: "",
          message: "",
        });
 
      setLoading(false);

        return;
      }

      toast.success(data.message);
    
      setLoading(false);

      setFormData({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`mb-3 ${invalidFields.includes("fName") && "has-error"}`}>
        <input
          type="text"
          name="fName"
          placeholder="First Name"
          value={formData.fName}
          onChange={handleChange}
          className={`form-control input-outline ${invalidFields.includes("fName") && "invalid"}`}
        />
        {invalidFields.includes("fName") && (
          <div className="invalid-feedback">Please enter your first name.</div>
        )}
      </div>
      <div className={`mb-3 ${invalidFields.includes("lName") && "has-error"}`}>
        <input
          type="text"
          name="lName"
          value={formData.lName}
          placeholder="Last Name"
          onChange={handleChange}
          className={`form-control input-outline ${invalidFields.includes("lName") && "invalid"}`}
        />
        {invalidFields.includes("lName") && (
          <div className="invalid-feedback">Please enter your last name.</div>
        )}
      </div>
      <div className={`mb-3 ${invalidFields.includes("email") && "has-error"}`}>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          className={`form-control input-outline ${invalidFields.includes("email") && "invalid"}`}
        />
        {invalidFields.includes("email") && (
          <div className="invalid-feedback">Please enter a valid email address.</div>
        )}
      </div>
      <div className={`mb-3 ${invalidFields.includes("phone") && "has-error"}`}>
        <input
          type="phone"
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          onChange={handleChange}
          className={`form-control input-outline ${invalidFields.includes("phone") && "invalid"}`}
        />
        {invalidFields.includes("phone") && (
          <div className="invalid-feedback">Please enter a valid phone number.</div>
        )}
      </div>
      <div className="mb-3">
        <textarea
          className={`form-control ${invalidFields.includes("message") && "invalid"}`}
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
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

export default GeneralForm;
