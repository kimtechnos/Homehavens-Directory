import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const validationSchema = yup.object({
    location: yup.string().required("Location is required"),
    property: yup.string().required("Property type is required"),
    price: yup.string().required("Price is required"),
  });
  const formik = useFormik({
    initialValues: {
      location: "",
      property: "",
      price: "",
    },
    onSubmit: (values) => {
      console.log("form data", values);
    },
    validationSchema: validationSchema,
  });
  return (
    <div>
      <section className="hero">
        <div className="container">
          <header>
            <h1>
              Discover Your perfect home away
              <br />
              from home
            </h1>
          </header>

          <form className="flex" onSubmit={formik.handleSubmit}>
            <div className="box">
              <span>lacation/street</span>
              <input
                type="text"
                placeholder="location"
                name="location"
                value={formik.values.location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.location && formik.errors.location ? (
                <p className="error">{formik.errors.location}</p>
              ) : null}
            </div>
            <div className="box">
              <span>Property type</span>
              <input
                type="text"
                placeholder="property type"
                name="property"
                value={formik.values.property}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.property && formik.errors.property ? (
                <p className="error">{formik.errors.property}</p>
              ) : null}
            </div>
            <div className="box">
              <span>price</span>
              <input
                type="text"
                placeholder="Price range"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.price && formik.errors.price ? (
                <p className="error">{formik.errors.price}</p>
              ) : null}
            </div>
            <div className="box">
              <h4>Filter</h4>
            </div>
            <button className="btn1" type="submit">
              <FaSearch className="serach-icon" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
