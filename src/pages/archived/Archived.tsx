import EmptyState from "components/emptyState/EmptyState";
import React from "react";
import { MdOutlineArchive } from "react-icons/md";

const Archived = () => {
  return (
    <div>
      <EmptyState
        text="Your archived notes appear here"
        Icon={MdOutlineArchive}
      />
    </div>
  );
};

export default Archived;
