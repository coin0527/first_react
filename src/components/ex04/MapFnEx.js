import styled from "styled-components";

const nums = [1, 2, 3, 4, 5];
console.log(nums);

export const MapFnEx = () => {
  //   nums.map((n) => console.log(n + "ㅇㅇ"));
  return (
    <div>
      {nums.map((num) => (
        <div key={num}> {num} </div>
      ))}
    </div>
  );
};

// 배열이 무조건 있어야함.
// 배열을 기준으로 배열의 요소값을 새로운 값으로 반환하는 역할
// 유니크한 키값(고유값)을 넣어줘야함

// 네이버 구글 카카오를 누르면 해당 페이지로 이동할수 있게 만들어주세요
