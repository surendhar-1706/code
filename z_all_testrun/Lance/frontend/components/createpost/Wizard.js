import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  useFormik,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { AiTwotoneCalendar } from "react-icons/ai";
import { MdAvTimer } from "react-icons/md";
import { Line } from "rc-progress";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import Disclosurecomponent from "./Disclosurecomponent";
import { AnimatePresence } from "framer-motion";
const Wizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);
  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;
  // const [value_state, set_value_state] = useState();
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
          {/* <hr /> */}
          <div className="flex my-4 mx-2 space-x-4 justify-end">
            {stepNumber > 0 && (
              <button
                className="px-8 py-1 hover:bg-gray-50  text-upworkgreen-light border font-semibold rounded-full"
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

const WizardApp = () => {
  const [radio_value, set_radio_value] = useState();

  return (
    <div className=" border">
      <Wizard
        initialValues={{
          work_duration: "",
          //
          title: "",
          job_category: "",
          //
          skill_required_for_job: "killing",
          //
          scope: "beginner",
          //
          total_pay: "",
          if_total_then_pay: "",
          if_hourly_then_pay_one: "",
          if_hourly_then_pay_two: "",
        }}
        onSubmit={async (values) => {
          console.log("Wizard submit hhhhhhhhhaaaaaaaaaa", values);
        }}
      >
        <WizardStep
          onSubmit={(values) => console.log("newStep1 onSubmit", values)}
          validationSchema={Yup.object({
            work_duration: Yup.string().required("Please Fill the duration"),
          })}
        >
          <div className="py-5 px-8 font-semibold text-2xl">
            Getting Started
          </div>
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
            {/* other part of the div */}
            <div className="px-4 pb-8 md:pb-28 md:px-8 col-span-4 pt-36">
              <span>
                <div className="pt-4 font-semibold pb-2">
                  Write a title for your job post
                </div>
                <div className="block">
                  {" "}
                  <Field className="border w-full mb-4 h-10 " name="title" />
                </div>
                <div className="">
                  <span className="font-semibold"> Example titles</span>{" "}
                  <div className="py-2  text-gray-700">
                    • Build responsive WordPress site with booking/payment
                    functionality
                  </div>{" "}
                  <div className=" text-gray-700">
                    {" "}
                    • AR experience needed for virtual product demos (ARCore)
                  </div>
                  <div className=" text-gray-700">
                    {" "}
                    • Developer needed to update Android app UI for new
                    OS/device specs
                  </div>
                </div>
              </span>
              <div>
                <div className="font-semibold pt-3">Job category</div>
                <div className="space-y-1">
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
                </div>
              </div>
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
          <span className="grid grid-cols-8">
            <div className="pb-40 col-span-4 bg-upworkgreen-form text-white rounded px-4 md:px-8">
              <span className="">
                <Line
                  percent="50"
                  strokeWidth="2"
                  trailWidth="2"
                  trailColor="#2B5468"
                  strokeColor="#95DE01"
                  strokeLinecap="round"
                  className="pt-8 pb-2 px-0"
                />
                <div className="flex justify-between  text-sm md:mb-20">
                  <span className="text-upworkgreen-bar">Title</span>
                  <span className="text-upworkgreen-bar">Skills</span>
                  <span>Scope</span>
                  <span>Budget</span>
                </div>
              </span>
              <span className="text-4xl font-semibold  ">
                What skills does your work require
              </span>
              {/* <div className="py-4 text-md">
              This helps your job post stand out to the right candidates. It’s
              the first thing they’ll see, so make it count!
            </div> */}
            </div>
            <div className="px-4 md:px-8 col-span-4 pt-4 md:pt-36">
              <div className="font-semibold text-lg">
                Search skills or add your own
              </div>
              <div className="mt-2 flex border items-center space-x-2 hover:border-green-600">
                <BsSearch size={30} className="py-1 px-2" />
                <Field
                  className="outline-none w-full h-9"
                  name="skill_required_for_job"
                  placeholder="Search skills or add your own"
                />
              </div>
              <ErrorMessage name="skill_required_for_job" />
              <AnimatePresence>
                <Disclosurecomponent />
              </AnimatePresence>
            </div>
          </span>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            scope: Yup.string().required("Please Fill the duration"),
          })}
        >
          <span className="grid grid-cols-8">
            <div className="pb-40 col-span-4 bg-upworkgreen-form text-white rounded px-4 md:px-8">
              <span className="">
                <Line
                  percent="75"
                  strokeWidth="2"
                  trailWidth="2"
                  trailColor="#2B5468"
                  strokeColor="#95DE01"
                  strokeLinecap="round"
                  className="pt-8 pb-2 px-0"
                />
                <div className="flex justify-between  text-sm md:mb-20">
                  <span className="text-upworkgreen-bar">Title</span>
                  <span className="text-upworkgreen-bar">Skills</span>
                  <span className="text-upworkgreen-bar">Scope</span>
                  <span>Budget</span>
                </div>
              </span>
              <span className="text-4xl font-semibold  ">
                Next, estimate the scope of your work.
              </span>
              <div className="py-4 text-md">
                These aren’t final answers, but this information helps us
                recommend the right talent for what you need.
              </div>
            </div>
            <div className="col-span-4 px-4 md:px-8 py-4 md:py-36">
              <div className="font-semibold">
                What level of experience will it need?
              </div>
              <div className="font-thin text-gray-700 py-2">
                This won't restrict any proposals, but helps match expertise to
                your budget.
              </div>
              <div className="flex hover:bg-gray-100 items-start gap-x-2 py-2">
                <Field
                  type="radio"
                  value="beginner"
                  className="border mt-1.5"
                  name="scope"
                />
                <div>
                  <div className="font-semibold">Entry</div>
                  <div className="text-sm text-gray-600">
                    {" "}
                    Looking for someone relatively new to this field
                  </div>
                </div>
              </div>
              <div className="flex hover:bg-gray-100 items-start gap-x-2 py-2">
                <Field
                  type="radio"
                  value="intermediate"
                  className="border mt-1.5"
                  name="scope"
                />
                <div>
                  <div className="font-semibold">Intermediate</div>
                  <div className="text-sm text-gray-600">
                    {" "}
                    Looking for substantial experience in this field
                  </div>
                </div>
              </div>
              <div className="flex hover:bg-gray-100 items-start gap-x-2 py-2">
                <Field
                  type="radio"
                  value="expert"
                  className="border mt-1.5"
                  name="scope"
                />
                <div>
                  <div className="font-semibold">Expert</div>
                  <div className="text-sm text-gray-600">
                    {" "}
                    Looking for comprehensive and deep expertise in this field
                  </div>
                </div>
              </div>

              <ErrorMessage name="scope" />
            </div>
          </span>
        </WizardStep>
        <WizardStep
          validationSchema={Yup.object({
            total_pay: Yup.string().required(),
            if_hourly_then_pay_one: Yup.string().when("total_pay", {
              is: "hourly",
              then: Yup.string().required(
                "you selected hourly so put hourly rate"
              ),
            }),
            if_hourly_then_pay_two: Yup.string().when("total_pay", {
              is: "hourly",
              then: Yup.string().required(
                "you selected hourly so put hourly rate"
              ),
            }),
            if_total_then_pay: Yup.string().when("total_pay", {
              is: "total",
              then: Yup.string().required(
                "You selected total mode so input total"
              ),
            }),
          })}
        >
          <span className="grid grid-cols-8">
            <div className="pb-40 col-span-4 bg-upworkgreen-form text-white rounded px-4 md:px-8">
              <span className="">
                <Line
                  percent="100"
                  strokeWidth="2"
                  trailWidth="2"
                  trailColor="#2B5468"
                  strokeColor="#95DE01"
                  strokeLinecap="round"
                  className="pt-8 pb-2 px-0"
                />
                <div className="flex justify-between  text-sm md:mb-20">
                  <span className="text-upworkgreen-bar">Title</span>
                  <span className="text-upworkgreen-bar">Skills</span>
                  <span className="text-upworkgreen-bar">Scope</span>
                  <span className="text-upworkgreen-bar">Budget</span>
                </div>
              </span>
              <span className="text-4xl font-semibold  ">
                Tell us about your budget.
              </span>
              <div className="py-4 text-md">
                This will help us match you to talent within your range.
              </div>
            </div>
            <div className="col-span-4 px-4 md:px-8 py-4 md:py-36">
              <span>
                <div>hourly</div>
                <div className="bg-green">
                  {" "}
                  <Field
                    onClick={() => {
                      set_radio_value("hourly");
                      console.log("horuly clicked");
                    }}
                    name="total_pay"
                    type="radio"
                    value="hourly"
                  />
                </div>{" "}
                <ErrorMessage name="total_pay" />
              </span>{" "}
              <span>
                <div>Total</div>
                <Field
                  onClick={() => {
                    set_radio_value("total");
                    console.log("total clicked");
                  }}
                  name="total_pay"
                  type="radio"
                  value="total"
                />{" "}
                <ErrorMessage name="total_pay" />
              </span>
              {radio_value === "hourly" ? (
                <span>
                  <div>Set hourly Rate</div>
                  <Field
                    className="border"
                    name="if_hourly_then_pay_one"
                  />{" "}
                  <Field className="border" name="if_hourly_then_pay_two" />{" "}
                  <div className="text-red-500">
                    <ErrorMessage name="if_hourly_then_pay_one" />
                  </div>
                </span>
              ) : (
                <span>
                  <div>Set total Rate</div>
                  <Field className="border" name="if_total_then_pay" />{" "}
                  <div className="text-red-500">
                    <ErrorMessage name="if_total_then_pay" />
                  </div>
                </span>
              )}
            </div>
          </span>
        </WizardStep>
      </Wizard>
    </div>
  );
};

export default WizardApp;
