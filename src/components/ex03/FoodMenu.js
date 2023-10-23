export const FoodMenu = ({ menus }) => {
  return (
    // console.log(menus);
    <>
      {/* 엑스트라 태그는 없고 부모역할을 같이함. FragmentTag */}
      <div>
        <h2> {menus[0].week}</h2>
        <h3> {menus[0].breakfast}</h3>
        <h3> {menus[0].lunch}</h3>
        <h3> {menus[0].dinner}</h3>
        <hr />
      </div>
      <div>
        <h2> {menus[1].week}</h2>
        <h3> {menus[1].breakfast}</h3>
        <h3> {menus[1].lunch}</h3>
        <h3> {menus[1].dinner}</h3>
        <hr />
      </div>
    </>
  );
};
