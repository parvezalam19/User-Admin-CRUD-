import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  deleteUserStart,
  editUserStart,
  loadUserStart,
  takeEditObj,
} from "../redux/action";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUserStart());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteUserStart(id));
    toast.success("User Deleted Successfully");
  };
  const handleEdit = (user, id) => {
    dispatch(takeEditObj(user));
    navigate(`/editUsers/${id}`);
  };

  return (
    <div className="row table_container">
              <h3 className="text-center m-3">Users Details</h3>
        <div className="col-sm-8">
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
                      <td className="d-flex gap-2 edit justify-content-center">
                        <button
                          className="btn sm-btn btn-primary font-weight-bold"
                          onClick={() => handleEdit(user, user.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn sm-btn btn-danger font-weight-bold delete"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
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
