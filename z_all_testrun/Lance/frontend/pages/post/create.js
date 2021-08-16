import React from "react";
import PostForm from "../../components/createpost/PostForm";
import Layouttwo from "../../components/Layout/Layouttwo";
function Create() {
  return (
    <Layouttwo>
      <div>
        <div>post create page</div>
        <PostForm />
      </div>
    </Layouttwo>
  );
}

export default Create;
