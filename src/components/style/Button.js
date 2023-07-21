import { styled } from "styled-components";

export const Button = styled.button`
  padding: 1rem;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 1rem;
  transition: 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: white;
    border: 1px solid black;
    color: black;
  }
`;

export const OutlineButton = styled(Button)`
  background: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background: black;
    color: white;
  }
`;
