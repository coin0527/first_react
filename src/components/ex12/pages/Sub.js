import { useParams } from "react-router-dom";
import styled from "styled-components";
import { data } from "./api";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
`;
const Titleimage = styled.div`
  border: 5px solid black;
  width: 400px;
  height: 400px;
  position: relative;
  margin: 0 400px;
  background-image: url(${(props) => props.$url}) no-repeat;
`;
const Paget = styled.div`
  margin-left: -250px;
  font-weight: 700;
  font-size: 30px;
  color: #333;
`;
const Pagep = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin-top: 40px;
`;

export const Sub = () => {
  const { id } = useParams();
  console.log(data[id].title);

  return (
    <Wrap>
      <Titleimage $url={data[id].img} />
      <Paget>
        {" "}
        {data[id].title}
        <Pagep>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <br /> Numquam, reiciendis!
          <br /> Totam tempore facilis incidunt.
          <br /> Architecto impedit quaerat cupiditate modi iusto
          <br /> temporibus assumenda et quas, velit alias.
          <br /> Obcaecati illo nihil quia?
        </Pagep>
      </Paget>
    </Wrap>
  );
};
