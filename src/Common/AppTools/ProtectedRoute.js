import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, currentUser, ...rest }) => {
  const history = useNavigate();
  const goBackHandler = () => {
    history.goBack();
  };
  console.log(rest); // show rest.path in the console
  // you could redirect/navigate back to /auth if the flag is not true
  return (
    <div>
      {currentUser ? (
        // <Navigate to={rest.path} />
        <Component />
        // <Navigate to="/../Components/Profile/ProfileGood" />
      ) : (
        // <Navigate to="../../Components/Profile/Profile" />
        
        // if user is login nav to home, if not nav to login
        <Navigate to={rest.path || "/login"} />
      )}
    </div>
  );
};

export default ProtectedRoute;