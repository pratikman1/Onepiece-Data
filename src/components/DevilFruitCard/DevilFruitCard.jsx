import React, { useEffect, useState } from "react";
import "./DevilFruitCard.css";

const DevilFruitCard = () => {
  const [fruit, setFruit] = useState([]);
  const [currPage, setCurrPage] = useState(1);

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

  //   Pagination

  const pageSize = 10;
  const startIndex = (currPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const nextPage = () => {
    if (endIndex < fruit.length) {
      setCurrPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currPage > 1) {
      setCurrPage((prev) => prev - 1);
    }
  };

  return (
    <section>
      <div className="fruit-container">
        {fruit.slice(startIndex,endIndex).map((fruit) => (
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
      {/* Pagination */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currPage === 1}>
          ← Previous
        </button>
        <span>Page {currPage} </span>
        <button onClick={nextPage} disabled={(endIndex) >= fruit.length}>
          Next →
        </button>
      </div>
    </section>
  );
};

export default DevilFruitCard;
