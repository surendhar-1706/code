import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function dtwo() {
  const [modal, setmodal] = useState(false);
  return (
    <div className="">
      <button onClick={() => setmodal(true)}>Click true</button>
      <button onClick={() => setmodal(false)}>Click false</button>
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
              exit={{ opacity: 0, x: "100vw" }}
              className="bg-green-400 fixed 
               "
            >
              Modal text
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default dtwo;
