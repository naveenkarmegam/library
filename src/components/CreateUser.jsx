import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../reducer/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const closeAfter15 = () =>
    toast("A New user will be created", {
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
    });


  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      dop: "",
      
    },
    validate: (values) => {
      let errors = {};
      if (!values.title) {
        errors.title = "Please enter the User name";
      }

      if (!values.author) {
        errors.author = "Please enter the Position";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.author)
      ) {
        errors.author = "Invalid author address";
      }

     
      if (!values.dop) {
        errors.dop = "Please enter the Date of Published";
      }

      if (!values.isbn) {
        errors.isbn = "Please enter the ISBN No";
      }
      

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://65615e6adcd355c08323c948.mockapi.io/users",
          values
        );
        dispatch(createUser(response.data));

        navigate("/");
        closeAfter15();
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    },
  });
  return (
    <div className="container-fluid">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4 mb-3">
            <label className=" form-label">Name</label>
            <input
              type="text"
              className="form-control"
              title="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.getFieldMeta('title').touched && formik.errors.title ? (
              <div className="text-danger">{formik.errors.title}</div> 
            ): null
            }
          </div>
          <div className="col-lg-4 mb-3">
            <label className=" form-label">E-mail</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={formik.values.author}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             {formik.getFieldMeta('author').touched && formik.errors.author ? (
              <div className="text-danger">{formik.errors.author}</div> 
            ): null
            }
          </div>
          
          <div className="col-lg-4 mb-3">
            <label className=" form-label">Phone</label>
            <input
              type="tel"
              className="form-control"
              name="isbn"
              value={formik.values.isbn}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.getFieldMeta('isbn').touched && formik.errors.isbn?(
              <div className="text-danger">{formik.errors.isbn}</div>
            ):null}
          </div>
          <div className="col-lg-4 mb-3">
            <label className=" form-label">Website</label>
            <input
              type="text"
              className="form-control"
              name="dop"
              value={formik.values.dop}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
                        {formik.getFieldMeta('dop').touched && formik.errors.dop?(
              <div className="text-danger">{formik.errors.dop}</div>
            ):null}
          </div>


          <div className="col-lg-12 text-center mt-4">
            <input type="submit" className="btn btn-primary px-5 col-lg-3 py-2" value={"Submit"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
