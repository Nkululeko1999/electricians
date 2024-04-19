import React from "react";

function Iframe() {
  return (
    <iframe
      className="embed-responsive-item rounded-large"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114759.26815675989!2d27.968254248509137!3d-25.993376120793346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e17f65959cd%3A0x3ac640ff52ccc755!2sMidrand%2C%201685!5e0!3m2!1sen!2sza!4v1713559601596!5m2!1sen!2sza"
      style={{ border: 0, height: "100%", width: "100%" }}
      allowFullScreen=""
      loading="lazy"
      title="location"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Iframe;
