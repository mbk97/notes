import React from "react";
import EmptyState from "../../components/emptyState/EmptyState";
import { AiOutlineBulb } from "react-icons/ai";
import { Card } from "./style";
import { CardContainer, CardLayoutWrapper } from "GlobalStyle/GlobalStyle";

interface IHomeProps {
  layout: boolean;
}

const Home = ({ layout }: IHomeProps) => {
  const data = [1, 2, 3, 4];

  return (
    <div>
      {/* <EmptyState Icon={AiOutlineBulb} text="Notes you add will appear here" /> */}
      <CardLayoutWrapper className={layout ? "grid_class" : "flex_class"}>
        {data.map((index) => {
          return (
            <CardContainer className={layout ? "small_card" : "big_card"}>
              <Card key={index}>
                <h1>hello</h1>
              </Card>
            </CardContainer>
          );
        })}
      </CardLayoutWrapper>
    </div>
  );
};

export default Home;
