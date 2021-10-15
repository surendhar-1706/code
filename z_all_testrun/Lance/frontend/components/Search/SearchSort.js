import React from "react";
import { Form, Formik } from "formik";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
function SearchSort() {
  const router = useRouter();
  return (
    <div className="space-y-3 font-semibold">
      <Formik
        initialValues={{ search_field_value: "" }}
        onSubmit={(values, actions) => {
          router.push(`/post/search/?title=${values.search_field_value}`);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-full h-10 pl-5 resize-none  rounded-sm p-1 outline-none focus:border-green-600 border border-gray-300 "
                onChange={(e) => {
                  props.handleChange(e);
                  console.log("values changed from searchsort checkbox");
                }}
                onBlur={props.handleBlur}
                value={props.values.search_field_value}
                name="search_field_value"
                placeholder="Search for jobs"
              />
              <button type="submit">
                {" "}
                <BiSearch className="bg-green-600 text-white h-10 w-9 px-1.5" />
              </button>
            </div>

            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          </form>
        )}
      </Formik>
    </div>
  );
}

export default SearchSort;
