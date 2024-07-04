import React, { useState } from "react";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { useFormik } from "formik";
import * as yup from "yup";
import "./LoginSignup.css";

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required("full name is reqired")
    .min(4, "Should have a minimum of 4 characters"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be at least 6 characters")
    .required("Password is required"),
});

function LoginSignup() {
  const [action, setAction] = useState("login");

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="ls-container-login">
      <div className="ls-header">
        <div className="ls-text">{action}</div>
        <div className="ls-underline"></div>

        <form onSubmit={formik.handleSubmit} className="ls-inputs">
          {action === "sign up" && (
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
          )}

          <div className="ls-input">
            <MdEmail className="ls-icon" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="ls-error">{formik.errors.email}</p>
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

          {action === "login" && (
            <div className="ls-forgot-password">
              Lost password? <span>Click here</span>
            </div>
          )}
        </form>

        <div className="ls-submit-container">
          <div
            className={action === "login" ? "ls-submit ls-gray" : "ls-submit"}
            onClick={() => {
              setAction("sign up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "sign up" ? "ls-submit ls-gray" : "ls-submit"}
            onClick={() => {
              setAction("login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
