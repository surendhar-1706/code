import { Form, Formik } from "formik";
import React, { useState } from "react";

function FormikStepper({ children, props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setstep] = useState(0);
  const currentChild = childrenArray[step];
  return (
    <div>
      <Formik {...props}>
        <Form>{currentChild}</Form>
      </Formik>
    </div>
  );
}

export default FormikStepper;
