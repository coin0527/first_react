import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div>
        <Link to={"/"} style={{ color: "black" }}>
          {" "}
          LOGO{" "}
        </Link>
      </div>

      <ul>
        <li>
          <Link to={"/sub01"} style={{ color: "black" }}>
            {" "}
            Sub01
          </Link>
        </li>
        <li>
          <Link to={"/sub02"} style={{ color: "black" }}>
            {" "}
            Sub02
          </Link>
        </li>
      </ul>
    </header>
  );
};
