import React,{useState,useEffect}from "react";

import img from "../../assets/red-vector-illustration-banner-rent-260nw-1639612453.webp";
import Banner from "../../componenents/Banner/Banner";
import axios from "axios";
import { apiUrl } from "../../utils/config";

import ServicesCard from "./ServicesCard";
const Services = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const getHomes = await axios.get(`${apiUrl}/api/homes`);
        setHomes(getHomes.data);
        console.log(getHomes.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHomes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/homes/${id}`);
      setHomes(homes.filter((home) => home.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Banner name="Our homes" title="Available spaces?" cover={img} />
      <div className="services">
        <h3 className="title">Available Homes</h3>
        <div className="homes_section">
          {homes.length > 0 ? (
            homes.map((home) => (
              <ServicesCard
                key={home.id}
                id={home.id}
                homeImg={home.homeImg}
                homeTitle={home.homeTitle}
                homeLocation={home.homeLocation}
                homeType={home.homeType}
                homePrice={home.homePrice}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Services;
