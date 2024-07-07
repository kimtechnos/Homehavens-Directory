import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";
import "./LoginSignup.css";
import { apiUrl } from "../../utils/config";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  emailAddress: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
});

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`${apiUrl}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        credentials: "include",
      });
      console.log(response);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      // console.log("User registered successfully");
      const data = await response.json();
      navigate("/");
      // console.log(data)
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="ls-container-login">
      <div className="ls-header">
        <div className="ls-text">Login</div>
        <div className="ls-underline"></div>

        <form onSubmit={formik.handleSubmit} className="ls-inputs">
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

          <div className="ls-forgot-password">
            Lost password? <span>Click here</span>
          </div>

          <button type="submit" className="ls-submit" disabled={loading}>
            {loading ? "Please wait..." : "Login"}
          </button>
          {error && <p className="ls-error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
