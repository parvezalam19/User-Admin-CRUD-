import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserData, updateUserData } from "../redux/action";
import Addusers from "./Addusers";

const Home = () => {
  const dispatch = useDispatch();
  const { users, editUser } = useSelector((state) => state.data);
  const handleDelete = (index) => {
    dispatch(deleteUserData(index));
  };
  const handleEdit = (index) => {
    dispatch(updateUserData(index));
  };
  return (
    <div className="row table_container">
      <div className="col-sm-3">
        <Addusers editUser={editUser} />
      </div>
      <div className="col-sm-7">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>BioData</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length === 0 ?  <tr>
                <td colSpan="5" className="text-center">
                  No User Data Found..
                </td>
              </tr>
              : (users.map((user, i) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.DOB}</td>
                    <td>{user.gender}</td>
                    <td>{user.Biodata}</td>
                    <td className="d-flex gap-2">
                      <span
                        className="text-primary font-weight-bold"
                        onClick={() => handleEdit(user.id)}
                      >
                        Edit
                      </span>
                      <span
                        className="text-danger font-weight-bold"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                );
              }))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
