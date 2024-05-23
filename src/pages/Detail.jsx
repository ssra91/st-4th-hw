import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <h1>Detail</h1>
      <p>ID: {id}</p>
    </Container>
  );
};

const Container = styled.div``;

export default Detail;
