import * as Yup from "yup";

export const addUserValidation = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  Biodata: Yup.string().min(10).max(100).required("Please enter Details"),
  gender : Yup.string().required("Please select one option"),
  DOB : Yup.string().required("Please Choose Date of Birth")
});
