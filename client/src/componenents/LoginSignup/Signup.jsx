import React, { useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../utils/config";
import axios from "axios";
import "./LoginSignup.css";

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(4, "Should have a minimum of 4 characters"),
  emailAddress: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
});

function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(`${apiUrl}/api/users/register`, values);

      console.log(response);
      const data = response.data;

      console.log("User registered successfully");
      navigate("/login");
    } catch (e) {
      console.error(e);
      setError(e.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      emailAddress: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="ls-container-signup">
      <div className="ls-header">
        <div className="ls-text">Sign Up</div>
        <div className="ls-underline"></div>
        <form onSubmit={formik.handleSubmit} className="ls-inputs">
          <div className="ls-input">
            <IoMdPersonAdd className="ls-icon" />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <p className="ls-error">{formik.errors.fullName}</p>
            ) : null}
          </div>
          <div className="ls-input">
            <MdEmail className="ls-icon" />
            <input
              type="text"
              name="emailAddress"
              placeholder="Email"
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.emailAddress && formik.errors.emailAddress ? (
              <p className="ls-error">{formik.errors.emailAddress}</p>
            ) : null}
          </div>
          <div className="ls-input">
            <RiLockPasswordLine className="ls-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="ls-error">{formik.errors.password}</p>
            ) : null}
          </div>
          <button type="submit" className="ls-submit" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
          {error && <p className="ls-error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
