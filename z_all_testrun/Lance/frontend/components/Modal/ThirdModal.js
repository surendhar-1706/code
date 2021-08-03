import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { IoChevronBackSharp } from "react-icons/io5";
function ThirdModal({ children, modalstate, setmodalstate }) {
  const [modal, setmodal] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modal]);
  return (
    <div className="bg-gray-100">
      {modalstate && (
        <motion.div
          className=" fixed inset-0 overflow-y-scroll  overflow-hidden
          "
          initial={{ x: "100vw", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            x: "100vw",
            transition: { duration: 0.2 },
            ease: "easeInOut",
          }}
        >
          {" "}
          <div className="md:grid grid-cols-6 ">
            {" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 2 } }}
              // exit={{ opacity: 0, transition: { duration: 10 } }}
              className="col-span-1 bg-gray-200 bg-opacity-30"
            >
              {" "}
            </motion.div>
            <div className=" col-span-5 bg-gray-100 border border-gray-200">
              <div className="bg-white pl-8 py-7">
                <button
                  className="transform scale-125"
                  onClick={async () => {
                    setmodal(false);
                    setmodalstate(false);
                    console.log(
                      "printing from modal close button",
                      modalstate,
                      "-modalstate",
                      modal,
                      "-modal"
                    );
                    router.push("/post", undefined, { shallow: true });
                  }}
                >
                  <IoChevronBackSharp className="text-green-600 transform scale-150" />
                </button>
              </div>
              <hr className="mb-7"></hr>
              <div className="bg-white ml-8 pl-5 pt-5 border border-gray-200 rounded-lg">
                {children}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ThirdModal;
