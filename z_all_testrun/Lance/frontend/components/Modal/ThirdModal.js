import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
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
    <div className="">
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
            <div className=" bg-white col-span-5 px-10">
              <div className=" pt-20">
                <button
                  className=" "
                  onClick={async () => {
                    let wow_one = await setmodal(false);
                    let wow_two = await setmodalstate(false);
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
                  Click false
                </button>
              </div>
              {children}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ThirdModal;
