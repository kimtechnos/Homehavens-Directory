function PropertyCard() {
  const featured = [
    {
      cover:
        "../../../src/assets/real_estate_agent_24dp_FILL0_wght400_GRAD0_opsz24.png",
      name: "Family House",
    },
    {
      cover:
        "../../../src/assets/apartment_24dp_FILL0_wght400_GRAD0_opsz24.png",
      name: "House & Villa",
    },
    {
      cover: "../../../src/assets/logo2.png",
      name: "Apartment",
    },
    {
      cover: "../../../src/assets/logo2.png",
      name: "Office & Studio",
    },
    {
      cover:
        "../../../src/assets/family_home_24dp_FILL0_wght400_GRAD0_opsz24.png",
      name: "Villa & Condo",
    },
  ];

  return (
    <>
      <div className="featured grid5 mtop">
        {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt={items.name} />
            <h4>{items.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default PropertyCard;
