import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/manage">Manage</Link>
        </li>{" "}
        <li>
          <Link to="/notifications">Notifications</Link>
        </li>{" "}
        <li>
          <Link to="/profile">Profile</Link>
        </li>{" "}
      </ul>
    </div>
  );
};
