// import React, { useState } from "react";
// import Modal from "react-modal";
// function dummy() {
//   const [modal, setmodal] = useState(false);
//   return (
//     <div className=" bg-gray-100  ">
// <button
//   onClick={() => {
//     setmodal(true);
//   }}
// >
//   open
// </button>
//       <Modal className="" isOpen={modal}>
//         <div>Modal text</div>
// <button
//   onClick={() => {
//     setmodal(false);
//   }}
// >
//   close
// </button>
//       </Modal>
//     </div>
//   );
// }

// export default dummy;
import React, { useState } from "react";
import CustomModal from "../components/Modal/CustomModal";
function dummy() {
  const [modal, setmodal] = useState(false);
  return (
    <div className="bg-green-50">
      <CustomModal modal={modal} setmodal={setmodal}>
        <div className="bg-yellow-200  inset-1 rounded-lg">This is a modal</div>
      </CustomModal>
      <div>Click to open</div>
      <button
        className="px-2 py-1 bg-green-400"
        onClick={() => {
          setmodal(true);
        }}
      >
        open
      </button>
    </div>
  );
}

export default dummy;
