import React, { useEffect, useState } from "react";
import "./DevilFruitCard.css";

const DevilFruitCard = () => {
  const [fruit, setFruit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.api-onepiece.com/v2/fruits/en");
        const data = await res.json();
        setFruit(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // console.log(data);
  }, []);

  return (
    <div className="fruit-container">
      {fruit.map((fruit) => (
        <div className="fruit-card" key={fruit.id}>
          {/* <img src={fruit.filename} alt={fruit.name} className="fruit-image" /> */}

          <div className="fruit-content">
            <h3>{fruit.name}</h3>

            <span className="fruit-type">{fruit.type}</span>

            <p className="roman-name">
              Roman Name - <span>{fruit.roman_name}</span>
            </p>

            <p className="fruit-description">{fruit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DevilFruitCard;
