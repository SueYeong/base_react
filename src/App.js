import TagRule from "./components/1_jsxRule/TagRule";
import ClassComponent from "./components/2_component/ClassComponent";
// import FnComponent from "./components/2_component/FnComponent";
import {
  FnComponent_1,
  FnComponent_2,
} from "./components/2_component/FnComponent";
import { Menus } from "./components/3_props/Menus";
import { Menus_ex } from "./components/3_props/Menus_ex";
import { Subject } from "./components/3_props/Subject";
import { ConEx } from "./components/4_map/ConEx";
import { Content } from "./components/4_map/Content";
import { FoodMenu } from "./components/4_map/FoodMenu";
import { Kakao } from "./components/4_map/Kakao";
import { conDb, KakaoDb, subJectDb, TodayMenu } from "./db";
import { GlobalStyled } from "./styles/GlobalStyled";

const App = () => {
  return (
    <div>
      <GlobalStyled />
      {/* <TagRule />; */}
      {/* 1일차 */}

      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}
      {/* <ClassComponent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}
      {/* <Subject sub={subJectDb} /> */}
      {/* <Menus_ex sub={TodayMenu} /> */}
      {/* 3일차 */}

      {/* <FoodMenu menus={TodayMenu} /> */}
      {/* <Kakao KakaoDate={KakaoDb} /> */}
      {/* <Content /> */}
      <ConEx conData={conDb} />
      {/* 4일차 */}
    </div>
  );
};

export default App;
