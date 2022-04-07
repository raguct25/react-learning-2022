import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  getUserReduceData,
  getUsers,
  UserReducerState,
} from "../../redux/reducer/user/userSlice";

export interface UserListPage {}

const UserList: React.FunctionComponent<UserListPage> = (props) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  //this getting one way
  const userState = useSelector((store: UserReducerState) => {
    return store["users"];
  });
  //this getting one way
  const test = useAppSelector(getUserReduceData);
  console.log("test", test);

  // const { users, loading, errorMessage } = test;

  const { users, loading, errorMessage } = userState;

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const navigateDetailPage = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <div>
      <h2 className="text-center bg-primary  ms-5 me-5 mt-2">UserList Page</h2>

      <Link to="/profile" state={users[0]}>
        Go Back
      </Link>

      {users.length > 0 &&
        users.map((data, index) => {
          return (
            <div className="card ms-5 me-5 mt-3" key={index}>
              <div className="card-header">User Name : {data.name}</div>
              <div className="card-body">
                <h5 className="card-title">Name : {data.username}</h5>
                <p className="card-text">Email : {data.email}</p>
                <button
                  onClick={() => navigateDetailPage(data.id)}
                  className="btn btn-primary"
                >
                  Detail View
                </button>
              </div>
            </div>
          );
        })}

      {loading && (
        <div className="text-center m-5">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-danger">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
