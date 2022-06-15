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
import { subJectDb, TodayMenu } from "./db";

const App = () => {
  return (
    <div>
      {/* <TagRule />; */}
      {/* 1일차 */}

      {/* <FnComponent /> */}
      {/* <FnComponent_1 />
      <FnComponent_2 /> */}
      {/* <ClassComponent /> */}
      {/* 2일차 */}

      {/* <Menus /> */}
      {/* <Subject sub={subJectDb} /> */}
      <Menus_ex sub={TodayMenu} />
      {/* 3일차 */}
    </div>
  );
};

export default App;
