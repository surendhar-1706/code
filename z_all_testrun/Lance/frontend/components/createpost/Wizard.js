import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io5";
import { MdAvTimer } from "react-icons/md";
import { Line } from "rc-progress";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
const Wizard = ({ children, initialValues, onSubmit }) => {
  //wizard does 1)page navigaton 2) page submit 3) Has Formik and Form component
  const Router = useRouter();
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
        <Form className="">
          <p>{/* Step {stepNumber + 1} of {totalSteps} */}</p>
          {step}
          <hr />
          <div className="flex my-4 mx-2 space-x-4 justify-end">
            {stepNumber > 0 && (
              <button
                className="px-8 py-1 hover:bg-green-700 bg-green-600 text-white font-semibold rounded-full"
                onClick={() => previous(formik.values)}
                type="button"
              >
                Back
              </button>
            )}
            {stepNumber === 0 && (
              <Link href="/post">
                <a className="px-8 py-1 text-green-500 hover:underline  font-semibold ">
                  Cancel
                </a>
              </Link>
            )}
            <div className="">
              <button
                className="px-8 py-1 hover:bg-green-700 bg-green-600 text-white font-semibold rounded-full"
                disabled={formik.isSubmitting}
                type="submit"
              >
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
  <div className=" border">
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
        <div className="py-5 px-8 font-semibold text-2xl">Getting Started</div>
        <hr />
        <div className="py-8 px-8 flex space-x-10">
          <span className="relative border rounded-md border-gray-300 hover:bg-gray-50 hover:border-green-500 cursor-pointer">
            <div className="absolute top-0 right-2">
              <Field type="radio" name="work_duration" value="One" />
            </div>
            <div className="mt-5  flex justify-center">
              <MdAvTimer className="" size={25} />
            </div>
            <span className="flex justify-center p-5">
              <span>
                <div className="text-lg font-semibold">
                  Short term or part time work
                </div>
                <div className="pt-3 px-4 font-light text-md text-gray-600">
                  {" "}
                  Less than 30 hrs/week
                </div>
                <div className="pt-1 px-6  font-light text-gray-600">
                  {" "}
                  Less than 3 months
                </div>
              </span>
            </span>
          </span>
          <span className="p-2 relative border rounded-md border-gray-300 hover:bg-gray-50 cursor-pointer hover:border-green-500">
            <div className="absolute top-0 right-2">
              <Field type="radio" name="work_duration" value="Two" />
            </div>{" "}
            <div className="mt-5  flex justify-center">
              <AiTwotoneCalendar size={25} />
            </div>{" "}
            <span className="flex justify-center p-5">
              <span>
                <div className="text-lg font-semibold">
                  Designated, longer term work
                </div>
                <div className="pt-3 px-4 font-light text-md text-gray-600">
                  More than 30 hrs/week
                </div>
                <div className="pt-1 px-6  font-light text-gray-600">
                  3+ months
                </div>
              </span>
            </span>
          </span>
        </div>
        <ErrorMessage name="work_duration" />
        <hr />
      </WizardStep>
      <WizardStep
        validationSchema={Yup.object({
          title: Yup.string().required("Please Fill the title"),
          job_category: Yup.string().required("Please Fill the job category"),
        })}
      >
        <span className="grid grid-cols-8">
          <div className="col-span-4 bg-upworkgreen-form text-white rounded px-4 md:px-8">
            <span className="">
              <Line
                percent="25"
                strokeWidth="2"
                trailWidth="2"
                trailColor="#2B5468"
                strokeColor="#95DE01"
                strokeLinecap="round"
                className="pt-8 pb-2 px-0"
              />
              <div className="flex justify-between  text-sm md:mb-20">
                <span className="text-upworkgreen-bar">Title</span>
                <span>Skills</span>
                <span>Scope</span>
                <span>Budget</span>
              </div>
            </span>
            <span className="text-4xl font-semibold ">
              Let's start with a strong title.
            </span>
            <div className="py-4 text-md">
              This helps your job post stand out to the right candidates. It’s
              the first thing they’ll see, so make it count!
            </div>
          </div>
          <div>
            <span>
              <div>Write a title for your job post</div>
              <div className="block">
                {" "}
                <Field className="border" name="title" />
              </div>
              <div>
                <span> Example titles</span>{" "}
                <div>
                  Build responsive WordPress site with booking/payment
                  functionality
                </div>{" "}
                <div>
                  {" "}
                  AR experience needed for virtual product demos (ARCore)
                </div>
                <div>
                  {" "}
                  Developer needed to update Android app UI for new OS/device
                  specs
                </div>
              </div>
            </span>
            <span className="flex items-center gap-x-2">
              <Field
                type="radio"
                className="border"
                name="job_category"
                value="FrontEnd"
              />
              <div>FrontEnd</div>
            </span>
            <span className="flex items-center gap-x-2">
              <Field
                type="radio"
                className="border"
                name="job_category"
                value="BackEnd"
              />
              <div>Backend</div>
            </span>
            <span className="flex items-center gap-x-2">
              <Field
                type="radio"
                className="border"
                name="job_category"
                value="FullStack"
              />
              <div>FullStack</div>
            </span>
            <ErrorMessage name="title" />
            <ErrorMessage name="job_category" />
          </div>
        </span>
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
