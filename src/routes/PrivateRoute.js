import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const isUserLoggedin = true;
  return (
    <Route
      {...rest}
      render={(props) => (isUserLoggedin ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
