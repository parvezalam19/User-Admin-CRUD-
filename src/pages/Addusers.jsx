import { useFormik } from "formik";
import { redirect, useNavigate, useParams,Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserValidation } from "../schemas";
import { v4 as uuidv4 } from "uuid";
import { createUserStart, editUserStart, loadUserStart } from "../redux/action";
import { toast } from "react-toastify";

const Addusers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { users } = useSelector((state) => state.data);
  const [isEdit, setIsEdit] = useState(false);
  let initialValues = {
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
      if (params.id) {
        dispatch(editUserStart(values, values.id));
        setTimeout(() => {
          dispatch(loadUserStart());
        }, 500);
        toast.success("User Update Successfully");
      } else {
        dispatch(createUserStart(values));
        setTimeout(() => {
          dispatch(loadUserStart());
        }, 500);
        toast.success("User Added Successfully");
      }

      resetForm({
        values: {
          name: "",
          DOB: "",
          gender: "",
          Biodata: "",
        },
      });
      navigate("/");
    },
  });

  useEffect(() => {
    const editUser = users.find((item) => item.id === params.id) || [];
    if (params.id) {
      setIsEdit(true);
      initialValues = {
        id: editUser.id,
        name: editUser.name,
        DOB: editUser.DOB,
        gender: editUser.gender,
        Biodata: editUser.Biodata,
      };
      formik.setValues(initialValues);
    }
  }, [params.id]);

  return (
    <div className="banner">
      <section className="form mx-auto col-sm-3  px-4 p-3">
        {isEdit ? <h5>Update User</h5> : <h5>Add Users</h5>}

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="input_text_field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={formik.values.name}
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
              <option value="Male">Male</option>
              <option value="Female">Female</option>
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
          <button className="btn btn-primary mb-3 w-100">Submit</button>

         
        </form>
      </section>
    </div>
  );
};

export default Addusers;
