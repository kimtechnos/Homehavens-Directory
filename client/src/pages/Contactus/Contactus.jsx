import React, { useState } from "react";
import { useFormik } from "formik";
import img from "../../assets/red-vector-illustration-banner-rent-260nw-1639612453.webp";
import Banner from "../../componenents/Banner/Banner";
import * as Yup from "yup";
import { apiUrl } from "../../utils/config";
import axios from "axios";
import "./contact.css";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contactus = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (values) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const token = "YOUR_AUTH_TOKEN"; // Replace with your actual token
      const response = await axios.post(
        `${apiUrl}/api/contact`, values);



      if (response.data.success) {
        alert("Your message has been sent successfully!");
        setSuccess("Your message has been sent successfully!");
        formik.resetForm();
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (e) {
      console.error("This is the error", e);
      setError(e.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      emailAddress: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Banner
        name="Contact Us"
        title="Need help? Please write to us your queries"
        cover={img}
      />
      <section className="contactus">
        <div className="contact">
          <form className="shadow" onSubmit={formik.handleSubmit}>
            <h4>Fill in the form</h4>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter full name here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <p className="ls-error">{formik.errors.fullName}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="emailAddress">Email</label>
              <input
                type="email"
                name="emailAddress"
                placeholder="Enter your email here"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.emailAddress}
              />
              {formik.touched.emailAddress && formik.errors.emailAddress ? (
                <p className="ls-error">{formik.errors.emailAddress}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <p className="ls-error">{formik.errors.subject}</p>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <p className="ls-error">{formik.errors.message}</p>
              ) : null}
            </div>
            <div className="form-group">
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Submit"}
              </button>
              {error && <p className="ls-error">{error}</p>}
              {success && <p className="ls-success">{success}</p>}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contactus;
