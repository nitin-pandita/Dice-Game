import { styled } from "styled-components";
import { Button } from "./style/Button";
const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;

  .display-text {
    h1 {
      font-size: 3.4rem;
    }
  }
`;

const Home = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/dice.png" alt="" />
      </div>
      <div className="display-text">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default Home;
