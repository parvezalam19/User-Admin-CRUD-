import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../redux/action";
import { addUserValidation } from "../schemas";
import { v4 as uuidv4 } from "uuid";

const Addusers = ({ editUser }) => {
  const dispatch = useDispatch();
  let UpdateUSer = editUser || [];
  let initialValues = "";

  useEffect(() => {
    if (editUser && editUser.length > 0) {
      initialValues = {
        id: UpdateUSer[0].id ? UpdateUSer[0].id : uuidv4(),
        name: UpdateUSer[0].name ? UpdateUSer[0].name : "",
        DOB: UpdateUSer[0].DOB ? UpdateUSer[0].DOB : "",
        gender: UpdateUSer[0].gender ? UpdateUSer[0].gender : "",
        Biodata: UpdateUSer[0].Biodata ? UpdateUSer[0].Biodata : "",
      };
    } else {
      initialValues = {
        id: uuidv4(),
        name: "",
        DOB: "",
        gender: "",
        Biodata: "",
      };
    }
    formik.setValues(initialValues);
  }, [editUser]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: addUserValidation,
    onSubmit: (values, { resetForm }) => {
      if (editUser.length > 0) {
        dispatch(addUserData(values, values.id, { type: "Update" }));
      } else {
        dispatch(addUserData(values, values.id, { type: "Add" }));
      }
      resetForm({
        values: {
          name: "",
          DOB: "",
          gender: "",
          Biodata: "",
        },
      });
    },
  });

  return (
    <section className="form mx-auto  px-4 p-3">
      <h5>Add Users</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        eveniet.
      </p>

      <form action="" onSubmit={formik.handleSubmit}>
        <div className="input_text_field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={UpdateUSer.name ? UpdateUSer[0].name : formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div className="input_text_field">
          <label htmlFor="">DOB</label>
          <input
            type="date"
            name="DOB"
            onChange={formik.handleChange}
            value={formik.values.DOB}
          />
          {formik.errors.DOB && formik.touched.DOB ? (
            <p className="error">{formik.errors.DOB}</p>
          ) : null}{" "}
        </div>{" "}
        <div className="input_text_field">
          <label htmlFor="">Gender</label>
          <select
            name="gender"
            id=""
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <option value="">Please select one…</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {formik.errors.gender && formik.touched.gender ? (
            <p className="error">{formik.errors.gender}</p>
          ) : null}{" "}
        </div>
        <div className="input_text_field ">
          <label htmlFor="">Bio Data</label>
          <textarea
            type="text"
            placeholder="Enter Details"
            name="Biodata"
            onChange={formik.handleChange}
            value={formik.values.Biodata}
          />
          {formik.errors.Biodata && formik.touched.Biodata ? (
            <p className="error">{formik.errors.Biodata}</p>
          ) : null}{" "}
        </div>
        <button className="btn btn-primary w-100">Submit</button>
      </form>
    </section>
  );
};

export default Addusers;
