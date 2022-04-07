import React from "react";
import { Link, useLocation } from "react-router-dom";

export interface ProfilePage {}

const Profile: React.FunctionComponent<ProfilePage> = (props) => {
  // const location: any = useLocation();

  // console.log("state test", location.state);
  return (
    <div>
      <h2>Profile Page</h2>
      <Link to="/">Go Back</Link>
      {/* <div className="card ms-5 me-5 mt-3">
        <div className="card-header">User Name : {location.state.name}</div>
        <div className="card-body">
          <h5 className="card-title">Name : {location.state.username}</h5>
          <p className="card-text">Email : {location.state.email}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
