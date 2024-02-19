import { FoodMenu } from "./FoodMenu";
import { Intro } from "./Intro";

// 배열은 항상 0번부터 시작해 ( index 값)
const FoodMenus = [
  {
    week: "월요일",
    breakfast: "시리얼",
    lunch: "제육",
    dinner: "김치",
  },
  {
    week: "화요일",
    breakfast: "샐러드",
    lunch: "제육덮밥",
    dinner: "김치찌개",
  },
  {
    week: "수요일",
    breakfast: "시리얼",
    lunch: "제육",
    dinner: "김치",
  },
];

export const PropsEx = () => {
  return (
    <div>
      <Intro name={"정다운"} age={12} job={"나무꾼"} />
      <Intro name={"이하율"} age={11} job={"개발자"} />
      <br /> <br />
      {/* <FoodMenu
        week={FoodMenus[0].week}
        breakfast={FoodMenu[0].breakfast}
        lunch={FoodMenu[0].lunch}
        dinner={FoodMenu[0].dinner}
      /> */}
      <FoodMenu menus={FoodMenus}></FoodMenu>
    </div>
  );
};

export default PropsEx;
