import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Wizard = ({ children, initialValues, onSubmit }) => {
  //wizard does 1)page navigaton 2) page submit 3) Has Formik and Form component
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(stepNumber - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values, bag);
    }
    if (isLastStep) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => (
        <Form>
          <p>
            Step {stepNumber + 1} of {totalSteps}
          </p>
          {step}
          <div>
            {stepNumber > 0 && (
              <button onClick={() => previous(formik.values)} type="button">
                Back
              </button>
            )}
            <div>
              <button disabled={formik.isSubmitting} type="submit">
                {isLastStep ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
//takes on individual form component and can add individual validation schema
const WizardStep = ({ children }) => children;

const WizardApp = () => (
  <div>
    <Wizard
      initialValues={{
        work_duration: "",
        //
        title: "",
        job_category: "",
        //
        skill_required_for_job: "",
        //
        scope: "beginner",
      }}
      onSubmit={async (values) => {
        console.log("Wizard submit hhhhhhhhhaaaaaaaaaa", values);
      }}
    >
      <WizardStep
        onSubmit={() => console.log("newStep1 onSubmit")}
        validationSchema={Yup.object({
          work_duration: Yup.string().required("Please Fill the duration"),
        })}
      >
        <Field type="radio" name="work_duration" value="One" />
        <Field type="radio" name="work_duration" value="Two" />
        <ErrorMessage name="work_duration" />
      </WizardStep>
      <WizardStep
        validationSchema={Yup.object({
          title: Yup.string().required("Please Fill the title"),
          job_category: Yup.string().required("Please Fill the job category"),
        })}
      >
        <Field className="border" name="title" />
        <Field className="border" name="job_category" />
        <ErrorMessage name="title" />
        <ErrorMessage name="job_category" />
      </WizardStep>
      <WizardStep
        validationSchema={Yup.object({
          skill_required_for_job: Yup.string().required("Please Fill skills"),
        })}
      >
        <Field className="border" name="skill_required_for_job" />

        <ErrorMessage name="skill_required_for_job" />
      </WizardStep>
      <WizardStep
        validationSchema={Yup.object({
          scope: Yup.string().required("Please Fill the duration"),
        })}
      >
        <Field type="radio" value="beginner" className="border" name="scope" />
        <Field
          type="radio"
          value="intermediate"
          className="border"
          name="scope"
        />
        <Field type="radio" value="expert" className="border" name="scope" />

        <ErrorMessage name="scope" />
      </WizardStep>
    </Wizard>
  </div>
);

export default WizardApp;
{
  /* <WizardStep
        onSubmit={() => console.log("Step1 onSubmit")}
        validationSchema={Yup.object({
          firstName: Yup.string().required("required"),
          lastName: Yup.string().required("required"),
        })}
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field
            autoComplete="given-name"
            component="input"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field
            autoComplete="family-name"
            component="input"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
          />
          <ErrorMessage className="error" component="div" name="lastName" />
        </div>
      </WizardStep>
      <WizardStep
        onSubmit={() => console.log("Step2 onSubmit")}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("required"),
        })}
      >
        <div>
          <label htmlFor="email">Email</label>
          <Field
            autoComplete="email"
            component="input"
            id="email"
            name="email"
            placeholder="Email"
            type="text"
          />
          <ErrorMessage name="email" />
        </div>
      </WizardStep> */
}
