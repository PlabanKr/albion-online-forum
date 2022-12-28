import React, { FunctionComponent } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { Comment } from "./comment";

export const Comments: FunctionComponent = () => {
  return (
    <div>
      <button
        type="button"
        className="mt-4 py-2 px-6 cursor-pointer bg-orange-700 text-white hover:bg-orange-600 inline-flex items-center gap-1"
      >
        <BiCommentDetail /> Add New Comment
      </button>
      <h3 className="text-lg font-semibold my-6">Answers</h3>
      <Comment />
    </div>
  );
};
