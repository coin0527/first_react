import styled from "styled-components";

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
  background-image: url("https://search.pstatic.net/sunny/?src=https%3A%2F%2Fdcimg3.dcinside.co.kr%2Fviewimage.php%3Fid%3D7baedf29b3%26no%3D24b0d769e1d32ca73fec87fa11d0283168a8dd5d0373ee31e5f23e84e4248727a69e415d29335707458234ffeb6d2757f049008de95961379bb1b6b5f95318cd3d8beee3e60cad55a076b17fc4ab99b1&type=a340");
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

export const Subs02 = () => {
  return (
    <Wrap>
      <Titleimage></Titleimage>
      <Paget>
        {" "}
        ChamCham2 is very cute
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
