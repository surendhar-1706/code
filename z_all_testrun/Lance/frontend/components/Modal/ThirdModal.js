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
    <motion.div exit={{ opacity: 0 }}>
      {modalstate && (
        // <AnimatePresence
        //   exitBeforeEnter
        //   onExitComplete={() => {
        //     console.log(
        //       "onexit complete triggered from third modal-------------------------"
        //     );
        //   }}
        // >

        <motion.div
          className=" fixed inset-0 overflow-y-scroll bg-yellow-100 overflow-hidden
          "
          initial={{ x: "100vw", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
          }}
          exit={{ opacity: 0, x: "100vw", transition: { duration: 1 } }}
        >
          {/* {children} */}
          <div className=" bg-green-200">
            <div className="bg-white pt-20">
              <button
                className="px-10 "
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
        </motion.div>
      )}
    </motion.div>
  );
}

export default ThirdModal;
