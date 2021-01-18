import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

const PrivateRouteBuyer = ({ component: Component, ...rest }) => {
    const history = useHistory();
  useEffect(() => {
    getDetails();
  }, []);
  const [loggedIn, setLoggedIn] = useState(false);

  const getDetails = () => {
    
    if (localStorage.getItem("shippingToken")) setLoggedIn(true);
    else history.push("/login");
  };

  return (
    <div>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </div>
  );
};

export default PrivateRouteBuyer;
