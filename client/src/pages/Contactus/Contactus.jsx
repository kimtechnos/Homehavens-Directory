import React from "react";
import img from "../../assets/red-vector-illustration-banner-rent-260nw-1639612453.webp";
import Banner from "../../componenents/Banner/Banner";
import "./contact.css";
const Contactus = () => {
  return (
    <>
      <Banner
        name="Contact Us"
        title="Need help? Please write to us your queries"
        cover={img}
      />
      <section className="contactus">
        <div className="contact">
          <form className="shadow">
            <h4>Fill in the form</h4>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                name="full-name"
                placeholder="Enter full name here"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email here"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
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
