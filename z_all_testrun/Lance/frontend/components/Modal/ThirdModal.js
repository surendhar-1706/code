import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
function ThirdModal({ children, modalstate, setmodalstate }) {
  const [modal, setmodal] = useState(modalstate);
  const router = useRouter();
  return (
    <div className="">
      {/* <button onClick={() => setmodal(true)}>Click true</button>
       */}

      <AnimatePresence exitBeforeEnter>
        {modal && (
          <motion.div exit={{ opacity: 0 }}>
            <motion.div
              initial={{ x: "100vw", opacity: 0 }}
              animate={{
                x: "10vw",
                opacity: 1,
                transition: { duration: 1 },
              }}
              exit={{ opacity: 0, x: "100vw", transition: { duration: 1 } }}
              className="bg-green-400 fixed 
               "
            >
              {/* {children} */}
              <div>
                <button
                  onClick={async () => {
                    router.push("/post", undefined, { shallow: true });
                    setmodal(false);
                    setmodalstate(false);
                    console.log(
                      "printing from modal close button",
                      modalstate,
                      "-modalstate",
                      modal,
                      "-modal"
                    );
                  }}
                >
                  Click false
                </button>
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThirdModal;
