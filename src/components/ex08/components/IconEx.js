import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faStop } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import "../css/style.css";
export const IconEx = () => {
  return (
    <div>
      <div className="wrap">
        <div className="box">
          <header>
            <a href="#">
              <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </header>
          <section>
            <div className="imgwrap"></div>
            <h3 style={{ fontWeight: "900" }}> Blue bird </h3>
            <h4> Pick Dreams </h4>
            <div className="musicBar"></div>
          </section>
          <bottom style={{ display: "flex", justifyContent: "spaceBetween" }}>
            <FontAwesomeIcon icon={faShuffle} />
            <FontAwesomeIcon icon={faBackward} />
            <FontAwesomeIcon icon={faStop} />
            <FontAwesomeIcon icon={faForward} />
            <FontAwesomeIcon icon={faArrowsRotate} />
          </bottom>
        </div>
      </div>
    </div>
  );
};
