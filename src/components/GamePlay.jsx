import { styled } from "styled-components";
import NumberGrid from "./NumberGrid";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [rules, setRules] = useState(false);
  // random number generator
  const randomGenerate = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Number not selected !");
      return;
    }
    setError("");
    const randomNumber = randomGenerate(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <Container>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberGrid
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        rollDice={rollDice}
        setScore={setScore}
        rules={rules}
        setRules={setRules}
      />
    </Container>
  );
};

const Container = styled.main`
  .top_section {
    padding-top: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export default GamePlay;
