import "../../styles/styles.css";

export const FoodMenu = ({ menuName, side }) => {
  // console.log(porps);
  // =>프롭스는 오브젝트형태로 가져오기 때문에 매개변수에 중괄호를 적고 작성할것
  // console.log(menuName);
  // console.log(side);
  return (
    <div>
      오늘의 메뉴는 <i className="menu">{menuName}</i> 사이드 메뉴는{" "}
      <i className="side">{side}</i>
      {/* =>jsx안쪽에 변수를 사용할시 중괄호로 감싸줄것 */}
    </div>
  );
};
