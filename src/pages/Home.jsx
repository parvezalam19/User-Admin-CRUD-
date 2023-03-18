import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStart, loadUserStart } from "../redux/action";
import Addusers from "./Addusers";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { users, editUser, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  const handleDelete = (id) => {
    // dispatch(deleteUserData(index));
    dispatch(deleteUserStart(id));
    toast.success("User Deleted Successfully");
  };
  const handleEdit = (index) => {
    // dispatch(updateUserData(index));
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
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center">
                  <Spinner animation="border" variant="primary" />
                </td>
              </tr>
            ) : users && users.length === 0 ? (
              <td colSpan="5" className="text-center">
                No user Data Found..
              </td>
            ) : (
              users.map((user, i) => {
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
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
