import { useState } from "react";
import DevilFruitCard from "../DevilFruitCard/DevilFruitCard";
import "./DevilFruits.css";

const DevilFruits = () => {
  const [selectedType, setSelectedType] = useState("All");

  return (
    <section className="fruit-page">
      {/* Hero */}

      <div className="filter-section">
        <div className="fruit-tabs">
          <button
            className={selectedType === "All" ? "active" : ""}
            onClick={() => setSelectedType("All")}>
            ALL TYPES
          </button>

          <button
            className={selectedType === "Paramecia" ? "active" : ""}
            onClick={() => setSelectedType("Paramecia")}>
            PARAMECIA
          </button>

          <button
            className={selectedType === "Logia" ? "active" : ""}
            onClick={() => setSelectedType("Logia")}>
            LOGIA
          </button>

          <button
            className={selectedType === "Zoan" ? "active" : ""}
            onClick={() => setSelectedType("Zoan")}>
            ZOAN
          </button>
        </div>
      </div>

      <DevilFruitCard selectedType={selectedType} />
    </section>
  );
};

export default DevilFruits;
