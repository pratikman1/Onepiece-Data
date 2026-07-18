import DevilFruitCard from "../DevilFruitCard/DevilFruitCard";
import "./DevilFruits.css";

const DevilFruits = () => {
  return (
    <section className="fruit-page">
      <div className="fruit-hero">
        <div className="hero-content">
          <span className="subtitle">FORBIDDEN POWER</span>

          <h1>
            THE DEVIL FRUIT
            <br />
            ENCYCLOPEDIA
          </h1>

          <p>
            Unlock the mysteries of the cursed fruits. From the common Paramecia
            to the mythical Zoan, every power comes at the price of the sea's
            hatred.
          </p>
        </div>
      </div>

      <div className="filter-section">
        <div className="fruit-tabs">
          <button className="active">ALL TYPES</button>
          <button>PARAMECIA</button>
          <button>LOGIA</button>
          <button>ZOAN</button>
        </div>

        {/* Sort box  */}
        <div className="sort-box">
          <span>SORT BY:</span>
          <button>RARENESS ▼</button>
        </div>
        {/* Sort box bnana hain abhi */}
      </div>

      {/* devil fruit card */}
      <div>
        <DevilFruitCard />
      </div>
      
    </section>
  );
};

export default DevilFruits;
