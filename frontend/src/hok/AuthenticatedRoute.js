import { useContext } from "react";
import { Navigate } from "react-router-dom";
import MainContext from "../context/MainContext";

const AuthenticatedRoute = ({ children }) => {
  const context = useContext(MainContext);

  if (
    context.state.login_status === true &&
    window.localStorage.getItem("username")
  ) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default AuthenticatedRoute;
