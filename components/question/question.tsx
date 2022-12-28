import React, { FunctionComponent } from "react";
import Image from "next/image";

interface Props {
  qTitle: string;
  qDate: string;
  modified: boolean;
  mDate?: string;
  username: string;
}

export const Question: FunctionComponent<Props> = ({
  qTitle,
  qDate,
  modified,
  mDate,
  username,
}) => {
  return (
    <div>
      <div className="flex gap-6">
        {/* User Icon, Meta-data and Question Title */}
        <div>
          <Image
            src="https://picsum.photos/100"
            alt="user"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold tracking-wide text-neutral-800">
            {qTitle}
          </h2>
          <p className="flex justify-between">
            <span className="text-sm text-neutral-500">Date: {qDate}</span>
            {modified ? (
              <span className="text-sm text-neutral-500">
                Modified: {mDate}
              </span>
            ) : (
              <span></span>
            )}
          </p>
          <p className="text-sm text-neutral-500">Asked by: {username}</p>
        </div>
      </div>
      <hr />
      <div></div>
    </div>
  );
};
