import PropsEx from "./components/ex03/PropsEx";
import { IntroEx } from "./components/ex04/IntroEx";
import { MapFnEx } from "./components/ex04/MapFnEx";
import { PageEx } from "./components/ex04/PageEx";
import { Ex05 } from "./components/ex05/Ex05";
import { Ex06 } from "./components/ex06/Ex06";
import { Ex07 } from "./components/ex07/Ex07";
import { Ex08 } from "./components/ex08/Ex08";
import { Ex09 } from "./components/ex09/Ex09";
import { Ex11 } from "./components/ex11/Ex11";
import { Ex12 } from "./components/ex12/Ex12";
import { Ex13 } from "./components/ex13/Ex13";
import { Ex14 } from "./components/ex14/Ex14";
import { Application } from "./components/musicexam/Application";

const App = () => {
  return (
    <div>
      {
        // <PropsEx />
        // <MapFnEx></MapFnEx>
        // <IntroEx />
        // <PageEx />
        // <Ex05 />
        // <Ex06 />
        // <Ex07 />
        // <Ex08 />
        // <Ex09 />
        // <Ex11 />
        //<Ex12 />
        //<Ex13 />
        <Ex14 />
        //<Application />
      }
    </div>
  );
};
export default App;

//  jsx문법 규칙
//  태그가 2개 이상일땐, 반드시 부모 태그로 닫아줘야함. => fncompon...

// 컴포넌트
// 레이아웃과 비슷하게 디자인의 하나의 영역을 뜻함
// 컴포넌트 제작시 파일명과 함수명은 동일해야하며, 첫글자는 대문자
// 태그는 반드시 닫아줄것

// import-불러오기 export-내보내기
