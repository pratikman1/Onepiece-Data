import React from "react";
import "./CharacterCard.css";
import { useState } from "react";
import { useEffect } from "react";

const CharacterCard = () => {
  //   const characterData = [
  //     {
  //       id: 1,
  //       name: "Monkey D Luffy",
  //       size: "174cm",
  //       age: "19 ans",
  //       bounty: "3.000.000.000",
  //       crew: {
  //         id: 1,
  //         name: "The Chapeau de Paille crew",
  //         status: "assets",
  //         number: "10",
  //         roman_name: "Mugiwara no Ichimi",
  //         total_prime: "3.161.000.100",
  //         is_yonko: true,
  //       },
  //       fruit: {
  //         id: 196,
  //         name: "Hito Hito no Mi, Nika model",
  //         description:
  //           'Hito Hito no Mi, Nika model, is a Mythical Zoan Demon Fruit that enables its user to transform into Nika, the "God of the Sun".',
  //         type: "Zoan Mythique",
  //         roman_name: "Hito Hito no Mi, Moderu: Nika",
  //       },
  //       job: "Captain",
  //       status: "vivant",
  //     },
  //   ];

  //   let allCharacter = [];
  let pageSize = 10;
  //   let currPage = 1;

  const [character, setCharacter] = useState([]);
  const [allCharacter, setAllCharacter] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.api-onepiece.com/v2/characters/en",
        );
        const data = await response.json();
        // allCharacter = data;
        setAllCharacter(data);
        // console.log(data, "pra");
        // console.log(character, "hlo");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (allCharacter.length > 0) {
      setCharacter(allCharacter?.slice(0, 10));
      setCurrPage(currPage + 1);
      console.log("active", currPage);
    }
  }, [allCharacter]);

  const handleShowMore = () => {
    const start = (currPage - 1) * pageSize;
    const end = start + pageSize;
    setCharacter(allCharacter.slice(start, end));
    console.log(currPage, "man");
    setCurrPage(currPage + 1);
  };
  return (
    <>
      <div className="character-card-container">
        {character.map((data) => (
          <div key={data.id} className="character-card">
            <div className="character-card-header">
              <div>
                <p className="character-role">{data.job}</p>
                <h3>{data.name}</h3>
              </div>

              <span className="character-status">{data.status}</span>
            </div>

            <div className="character-card-body">
              <div className="character-info">
                <p>
                  <strong>Size:</strong> {data.size}
                </p>

                <p>
                  <strong>Age:</strong> {data.age}
                </p>

                <p>
                  <strong>Bounty:</strong> ฿{data.bounty}
                </p>
              </div>

              <div className="character-info">
                <p>
                  <strong>Crew:</strong> {data.crew?.name || "Unknown"}
                </p>

                <p>
                  <strong>Members:</strong> {data.crew?.number || "-"}
                </p>

                <p>
                  <strong>Fruit:</strong> {data.fruit?.name || "None"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleShowMore}>Show More</button>
    </>
  );
};

export default CharacterCard;
