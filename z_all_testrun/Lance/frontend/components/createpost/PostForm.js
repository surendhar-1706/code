import React from "react";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
function PostForm() {
  const initialValues = {
    firstname: "",
    email: "",
    millionr: "",
    total: "",
    description: "",
  };
  const onSubmit = (values) => {
    console.log("form data", values);
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    total: Yup.number()
      .typeError("total must be a number")
      .required("Required")
      .positive("please Field a postive Number"),
    millionr: Yup.string().required("Required"),
  });

  return (
    <div className="h-screen flex justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="border">
          <div className="">
            <Field
              type="text"
              className="border block border-green-600 "
              name="firstname"
            />
            <ErrorMessage name="firstname" />
          </div>
          <div>
            <Field
              type="text"
              className="border  block border-green-600 "
              name="email"
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <Field
              type="text"
              className="border block border-green-600"
              name="millionr"
            />
            <ErrorMessage name="millionr" />
          </div>
          <div>
            <Field
              type="text"
              className="border block border-green-600"
              name="total"
            />{" "}
            <ErrorMessage name="total" />
          </div>
          <div>
            {" "}
            <Field
              as="textarea"
              type="text"
              className="border block border-green-600"
              name="description"
            />
            <ErrorMessage name="description" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default PostForm;
