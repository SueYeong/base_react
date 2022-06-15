export const Menus_ex = ({ sub }) => {
  return (
    <>
      <ul>
        <h1>오늘의 메뉴</h1>
        <li>
          오늘의 메뉴는 {sub[0].menu} 사이드 {sub[0].side}
        </li>
        <li>
          오늘의 메뉴는 {sub[1].menu} 사이드 {sub[1].side}
        </li>
        <li>
          오늘의 메뉴는 {sub[2].menu} 사이드 {sub[2].side}
        </li>
        <li>
          오늘의 메뉴는 {sub[3].menu} 사이드 {sub[3].side}
        </li>
        <li>
          오늘의 메뉴는 {sub[4].menu} 사이드 {sub[4].side}
        </li>
      </ul>
    </>
  );
};
