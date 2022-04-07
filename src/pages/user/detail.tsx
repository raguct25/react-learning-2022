import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

export interface UserDetailPage {}

const UserDetail: React.FunctionComponent<UserDetailPage> = (props) => {
  const { userId } = useParams();
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const URL = `https://jsonplaceholder.typicode.com/users/${userId}`;
    axios
      .get(URL)
      .then((response) => {
        setUser(response.data);
        setLoader(false);
      })
      .catch((error) => {
        console.log("error block excuted", error);
      });

    console.log("dtaa", user);
  }, []);

  return (
    <div>
      <h2 className="text-center m-4">UserDetail Page</h2>
      {!loader && (
        <div className="card ms-5 me-5 mt-3">
          <div className="card-header">User Name : {user.name}</div>
          <div className="card-body">
            <h5 className="card-title">Name : {user.username}</h5>
            <p className="card-text">Email : {user.email}</p>
          </div>
        </div>
      )}

      {loader && (
        <div className="text-center m-5">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden"></span>
          </div>
          <p className="text-danger">Fetching User Data</p>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
