import React, { FunctionComponent } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

interface Props {
  comment: string;
  cAuthor: string;
  cDate: string;
  likeCount: string;
  owner: boolean;
}

export const Comment: FunctionComponent<Props> = ({
  comment,
  cAuthor,
  cDate,
  likeCount,
  owner,
}) => {
  return (
    <div className="flex mb-4">
      <div className="px-6 flex flex-col gap-2">
        <BiLike />
        <p className="text-sm text-left">{likeCount}</p>
        <BiDislike />
      </div>
      <div>
        <div>{comment}</div>
        <div className="flex justify-between">
          <p className="mt-2 text-sm text-neutral-500">Comment by: {cAuthor}</p>
          <span className="flex gap-5">
            <p className="mt-2 text-sm text-neutral-500">Date: {cDate}</p>
            {owner ? (
              <button className="mt-2 text-sm text-orange-700">edit</button>
            ) : (
              <></>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
