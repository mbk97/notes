import React from "react";
import EmptyState from "components/emptyState/EmptyState";
import { FaRegTrashAlt } from "react-icons/fa";

const Trash = () => {
  return (
    <div>
      <EmptyState text="No notes in Trash" Icon={FaRegTrashAlt} />
    </div>
  );
};

export default Trash;
