import { useState } from "react";
import { styled } from "styled-components";

const NumberGrid = ({ error, selectedNumber, setSelectedNumber }) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberContainer>
      <p className="errorHandle">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, id) => (
          <Box
            isSelected={value === selectedNumber}
            key={id}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>selected number</p>
    </NumberContainer>
  );
};

export default NumberGrid;
const NumberContainer = styled.div`
  .errorHandle {
    color: red;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 20px;
    font-family: 700;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 2rem;
  background: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
`;
