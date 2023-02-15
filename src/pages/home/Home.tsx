import React from "react";
import EmptyState from "../../components/emptyState/EmptyState";
import { AiOutlineBulb } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <EmptyState Icon={AiOutlineBulb} text="Notes you add will appear here" />
    </div>
  );
};

export default Home;
