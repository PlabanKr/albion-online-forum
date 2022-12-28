import React, { FunctionComponent } from "react";
import { Comments } from "./comments";
import { Question } from "./question";

interface Props {
  qId: string | string[] | undefined;
}

export const QuestionComponent: FunctionComponent<Props> = ({ qId }) => {
  return (
    <div>
      <Question
        qTitle="What is best weapon for dungeon clearing?"
        qDate="12th Dec 2021"
        modified={true}
        mDate="13th Dec 2022"
        username="Robert"
      />
      <Comments />
    </div>
  );
};
