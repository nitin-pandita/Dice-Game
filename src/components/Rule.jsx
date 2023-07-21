import { styled } from "styled-components";

const Rule = () => {
  return (
    <RulesContainer>
      <h1>How to play this game</h1>
      <div className="list">
        <li>Select any Number</li>
        <li>Click on Dice Image</li>
        <li>
          If the selected number is equal to the dice number total gets updated
        </li>
        <li>If wrong -2 will be deducted</li>
      </div>
    </RulesContainer>
  );
};

export default Rule;

const RulesContainer = styled.div`
  margin-top: 2rem;
  background: #fbf1f1;
  padding: 10px;
`;
