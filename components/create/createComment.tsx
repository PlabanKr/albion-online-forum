import React, { Dispatch, FunctionComponent } from "react";

interface Props {
  showCommentForm: boolean;
  setShowCommentForm: Dispatch<React.SetStateAction<boolean>>;
}

export const CreateComment: FunctionComponent<Props> = ({
  showCommentForm,
  setShowCommentForm,
}) => {
  const handleSubmitClick = () => {
    console.log("Doing API calls");
    setShowCommentForm(!showCommentForm);
  };

  return (
    <form className="mt-4 flex flex-col">
      <textarea
        name="comment"
        id="comment"
        cols={30}
        rows={10}
        className="resize-none"
      ></textarea>
      <button
        onClick={handleSubmitClick}
        type="button"
        className="mt-5 py-2 px-6 self-start cursor-pointer bg-orange-700 text-white hover:bg-orange-600"
      >
        Submit
      </button>
    </form>
  );
};
