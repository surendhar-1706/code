import React from "react";
import PostForm from "../../components/createpost/PostForm";
import WizardApp from "../../components/createpost/Wizard";
import Layouttwo from "../../components/Layout/Layouttwo";
function Create() {
  return (
    <Layouttwo>
      <div>
        <div>post create page</div>
        {/* <PostForm /> */}
        <WizardApp />
      </div>
    </Layouttwo>
  );
}

export default Create;
