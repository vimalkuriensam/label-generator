import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const headerContext = () => (
    <div className="header">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h4 className="heading-primary u-margin-right-medium">Shipping Label</h4>
      </Link>
    </div>
  );

  return <Fragment>{headerContext()}</Fragment>
};


export default Header;
