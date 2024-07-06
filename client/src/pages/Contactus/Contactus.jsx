import React from "react";
import { useFormik } from "formik";
import img from "../../assets/red-vector-illustration-banner-rent-260nw-1639612453.webp";
import Banner from "../../componenents/Banner/Banner";
import * as Yup from "yup";
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
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
     
      console.log(values);
    },
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
              <label htmlFor="email">Email</label>
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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contactus;
