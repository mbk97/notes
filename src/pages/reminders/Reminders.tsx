import EmptyState from "components/emptyState/EmptyState";
import React from "react";
import { CgBell } from "react-icons/cg";

const Reminders = () => {
  return (
    <div>
      <EmptyState
        text="Notes with upcoming reminders appear here"
        Icon={CgBell}
      />
    </div>
  );
};

export default Reminders;
