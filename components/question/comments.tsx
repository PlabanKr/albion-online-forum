import React, { FunctionComponent } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { Comment } from "./comment";

function getLikeCountString(like: number): string {
  if (like === 0) {
    return "0";
  } else if (like > 0) {
    return `+${like}`;
  } else {
    return `${like}`;
  }
}

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
      <Comment
        likeCount={getLikeCountString(12)}
        cAuthor="John"
        cDate="14th Dec 2021"
        owner={true}
        comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam quo ex deleniti vero omnis sit, eius eum, odio totam facilis voluptatibus dolor dolorum minus harum tempore laboriosam suscipit alias vel? Dignissimos error sint voluptatibus, necessitatibus voluptate voluptatum nesciunt harum impedit, ea magnam, facilis fuga aliquam deserunt at vero libero sit earum officiis! Totam optio ea rerum quae dolor. Quos rerum ullam itaque beatae eveniet voluptas laboriosam iusto modi, error dolore natus aliquam? Dolorem corrupti aspernatur tempore nisi laudantium, consectetur fugiat aliquam tempora! Excepturi impedit voluptate neque praesentium dolorem quae illo ab nulla qui corporis consequatur sunt nihil optio magni quia, quod vel pariatur voluptas cum tempora, voluptatum earum? Placeat consequuntur inventore tempore eum sint, cum quos repellat molestias atque doloremque officia numquam suscipit quisquam voluptate nostrum dolorum. Autem, quasi impedit. Quaerat maxime quo deleniti quisquam corrupti! At, commodi minus consectetur totam ducimus a quam aut expedita sequi, saepe quasi."
      />
      <Comment
        likeCount={getLikeCountString(8)}
        cAuthor="John"
        cDate="14th Dec 2021"
        owner={true}
        comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam quo ex deleniti vero omnis sit, eius eum, odio totam facilis voluptatibus dolor dolorum minus harum tempore laboriosam suscipit alias vel? Dignissimos error sint voluptatibus, necessitatibus voluptate voluptatum nesciunt harum impedit, ea magnam, facilis fuga aliquam deserunt at vero libero sit earum officiis! Totam optio ea rerum quae dolor. Quos rerum ullam itaque beatae eveniet voluptas laboriosam iusto modi, error dolore natus aliquam? Dolorem corrupti aspernatur tempore nisi laudantium, consectetur fugiat aliquam tempora! Excepturi impedit voluptate neque praesentium dolorem quae illo ab nulla qui corporis consequatur sunt nihil optio magni quia, quod vel pariatur voluptas cum tempora, voluptatum earum? Placeat consequuntur inventore tempore eum sint, cum quos repellat molestias atque doloremque officia numquam suscipit quisquam voluptate nostrum dolorum. Autem, quasi impedit. Quaerat maxime quo deleniti quisquam corrupti! At, commodi minus consectetur totam ducimus a quam aut expedita sequi, saepe quasi."
      />
      <Comment
        likeCount={getLikeCountString(-100)}
        cAuthor="John"
        cDate="14th Dec 2021"
        owner={true}
        comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam quo ex deleniti vero omnis sit, eius eum, odio totam facilis voluptatibus dolor dolorum minus harum tempore laboriosam suscipit alias vel? Dignissimos error sint voluptatibus, necessitatibus voluptate voluptatum nesciunt harum impedit, ea magnam, facilis fuga aliquam deserunt at vero libero sit earum officiis! Totam optio ea rerum quae dolor. Quos rerum ullam itaque beatae eveniet voluptas laboriosam iusto modi, error dolore natus aliquam? Dolorem corrupti aspernatur tempore nisi laudantium, consectetur fugiat aliquam tempora! Excepturi impedit voluptate neque praesentium dolorem quae illo ab nulla qui corporis consequatur sunt nihil optio magni quia, quod vel pariatur voluptas cum tempora, voluptatum earum? Placeat consequuntur inventore tempore eum sint, cum quos repellat molestias atque doloremque officia numquam suscipit quisquam voluptate nostrum dolorum. Autem, quasi impedit. Quaerat maxime quo deleniti quisquam corrupti! At, commodi minus consectetur totam ducimus a quam aut expedita sequi, saepe quasi."
      />
      <Comment
        likeCount={getLikeCountString(10)}
        cAuthor="John"
        cDate="14th Dec 2021"
        owner={true}
        comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ullam quo ex deleniti vero omnis sit, eius eum, odio totam facilis voluptatibus dolor dolorum minus harum tempore laboriosam suscipit alias vel? Dignissimos error sint voluptatibus, necessitatibus voluptate voluptatum nesciunt harum impedit, ea magnam, facilis fuga aliquam deserunt at vero libero sit earum officiis! Totam optio ea rerum quae dolor. Quos rerum ullam itaque beatae eveniet voluptas laboriosam iusto modi, error dolore natus aliquam? Dolorem corrupti aspernatur tempore nisi laudantium, consectetur fugiat aliquam tempora! Excepturi impedit voluptate neque praesentium dolorem quae illo ab nulla qui corporis consequatur sunt nihil optio magni quia, quod vel pariatur voluptas cum tempora, voluptatum earum? Placeat consequuntur inventore tempore eum sint, cum quos repellat molestias atque doloremque officia numquam suscipit quisquam voluptate nostrum dolorum. Autem, quasi impedit. Quaerat maxime quo deleniti quisquam corrupti! At, commodi minus consectetur totam ducimus a quam aut expedita sequi, saepe quasi."
      />
    </div>
  );
};
