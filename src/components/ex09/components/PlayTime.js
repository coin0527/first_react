import styled from "styled-components";

export const PlayTime = () => {
  const SPlayTime = styled.div``;
  const Progress = styled.div`
    height: 6px;
    background-color: #555;
    border-radius: 3px;
    overflow: hidden;
  `;
  const Bar = styled.div`
    width: 10%;
    height: 100%;
    background-color: salmon;
  `;
  const TimeWarp = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #808080;
    margin-top: 6px;
  `;
  return (
    <SPlayTime>
      <Progress>
        <Bar />
      </Progress>

      <TimeWarp>
        <p>00:00</p>
        <p>03:40</p>
      </TimeWarp>
    </SPlayTime>
  );
};
