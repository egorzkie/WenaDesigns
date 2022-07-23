// import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import ProfileGood from "./ProfileGood";
import { parse as Parse} from '../Auth/AuthService';

const ProfileHome = () => {
  // const [flag, setFlag] = useState(false);
  // const currentUser = Parse.User.current();

  // useEffect(() => {
  //     if (currentUser !== null) {
  //       console.log("GOOD");
  //       setFlag(true);
  //     } else {
  //       console.log("BAD");
  //       setFlag(false);
  //     }
  // }, []);

  // In this case the flag is acquired through a check box but it could also be received from other methods
  // What is a Parse.User method that would help here?

  // use protected route to protect profileGood
  return (
    <div>
        <ProtectedRoute 
            currentUser={Parse.User.current()}
            // need to hard code this path, working on hotfix
            // path={`/ProfileGood?{user=${Parse.User.current().getEmail()}}`}
            // flag={flag}
            component={ProfileGood}
        />
    </div>
  );
};

export default ProfileHome;