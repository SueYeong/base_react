export const FoodMenu = ({ menus }) => {
  console.log(menus);
  return (
    <div>
      <h1
        style={{
          color: "salmon",
        }}
      >
        오늘의 메뉴
      </h1>
      <ul>
        {menus.map((dish) => (
          <li key={dish.id}>
            오늘의 메뉴는 {dish.menu}랑 사이드 메뉴는 {dish.side}다!
          </li>
        ))}
      </ul>
    </div>
  );
};
