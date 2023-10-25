import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
// fastop과 스위칭해서 들어가야하는부분 (조건문)
import "../css/style.css";
export const IconEx = () => {
  return (
    <div>
      <div className="wrap">
        <header>
          <FontAwesomeIcon icon={faCaretDown} style={{ cursor: "pointer" }} />
          {/* 버튼 이벤트 걸어줘야하는 부분 */}
          <FontAwesomeIcon icon={faBars} style={{ cursor: "pointer" }} />
          {/* 버튼 이벤트 걸어줘야하는 부분 */}
        </header>
        <section>
          <div className="imgwrap"></div>
          <h3 style={{ fontWeight: "900", fontSize: "20px" }}> ChamCham2 </h3>
          <h4 style={{ fontSize: "10px", marginTop: "3px" }}>
            choose me please
          </h4>
          <div className="musicBar"></div>
          {/* 버튼클릭시 0314초간, 게이지 충전 */}
          <div className="timer">
            <div className="timerL">00:00</div>
            <div className="timerR">03:14</div>
            {/* 시간이벤트 걸어줘야하는 부분 */}
          </div>
        </section>
        <div className="bottom">
          <FontAwesomeIcon icon={faShuffle} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon icon={faBackward} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon icon={faStop} style={{ cursor: "pointer" }} />
          {/* 버튼 이벤트 걸어줘야하는 부분 */}
          <FontAwesomeIcon icon={faForward} style={{ cursor: "pointer" }} />
          <FontAwesomeIcon
            icon={faArrowsRotate}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="playlist">
          <div className="icon"></div>
          <div className="iconName"> ChamCham2 </div>
          <FontAwesomeIcon
            icon={faCirclePlay}
            style={{ fontSize: "30px", marginLeft: "1px", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};
