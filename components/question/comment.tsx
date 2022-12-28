import React, { FunctionComponent } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

export const Comment: FunctionComponent = () => {
  return (
    <div className="flex">
      <div className="px-6 flex flex-col">
        <BiLike />
        <BiDislike />
      </div>
      <div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum numquam
          voluptatibus magni magnam laborum ex. Dicta nesciunt blanditiis,
          deserunt, aliquam magnam alias nostrum harum doloremque accusantium
          sit dolor fuga culpa assumenda repudiandae provident dolorem! Dolores
          vero omnis quo velit autem corporis sint iste laborum debitis, eum
          fugit ratione repellat dolorem, quisquam adipisci exercitationem
          ducimus ipsam numquam odit vel? Dolorem esse adipisci quod saepe aut.
          Quibusdam distinctio adipisci neque labore vel magnam dolor tempore,
          temporibus commodi. Eveniet obcaecati, at quod provident quo doloribus
          eius laboriosam sapiente quis, debitis soluta mollitia pariatur
          recusandae quasi non dolore exercitationem officia iusto dolores
          dolorum? Amet.
        </div>
        <p className="mt-2 text-sm text-neutral-500">Comment by: John</p>
      </div>
    </div>
  );
};
