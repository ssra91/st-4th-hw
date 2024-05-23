import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/detail/1">Detail 1</Link>
          </li>
          <li>
            <Link to="/detail/2">Detail 2</Link>
          </li>
          <li>
            <Link to="/detail/3">Detail 3</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled.div``;

export default Home;
