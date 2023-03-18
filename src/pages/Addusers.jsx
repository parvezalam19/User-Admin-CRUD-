import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserValidation } from "../schemas";
import { v4 as uuidv4 } from "uuid";
import { createUserStart,loadUserStart } from "../redux/action";

const Addusers = ({ editUser }) => {
  const dispatch = useDispatch();
  let UpdateUSer = editUser || [];

  const initialValues = {
    id: uuidv4(),
    name: "",
    DOB: "",
    gender: "",
    Biodata: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: addUserValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(createUserStart(values));
      dispatch(loadUserStart());

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
