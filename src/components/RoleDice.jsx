import { styled } from "styled-components";
import { Button, OutlineButton } from "./style/Button";
import Rule from "./Rule";

const RoleDice = ({ rules, setRules, setScore, currentDice, rollDice }) => {
  const resetScore = () => {
    setScore(0);
  };
  return (
    <DiceContainer>
      <div onClick={rollDice} className="dice">
        <img src={`images/side${currentDice}.png`} alt="" />
      </div>
      <p>Click on the dice to roll</p>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setRules((prev) => !prev)}>
          {rules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {rules && <Rule />}
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }
  .dice {
    cursor: pointer;
  }
  .dice img {
    width: 120px;
  }
`;
