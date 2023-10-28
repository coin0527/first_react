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
  background-image: url("https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi2.ruliweb.com%2Fimg%2F23%2F09%2F22%2F18abb4f7dc356d72d.png&type=a340");
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

export const Subpages = () => {
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
