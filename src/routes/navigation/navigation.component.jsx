import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "./../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <NavLink className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </NavLink>

        <div className="nav-links-container">
          <NavLink className="nav-link" to="/">
            HOME
          </NavLink>
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
          <NavLink className="nav-link" to="/sign-in">
            SIGN IN
          </NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
