/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import ActionButton from "@/components/commons/Button/Button";
import Flag from "@/components/Flag";

import { BasedContainer, HeadingChar, HeadingLeft, Lead, Wrapper } from "./HeroTitle.styles";

function HeroTitle() {
  const heading = "I help agencies deliver web-based experiences;";

  return (
    <Wrapper>
      <Lead>
        <HeadingChar>{heading}</HeadingChar>
      </Lead>
      <BasedContainer>
        <HeadingLeft>Based in Argentina</HeadingLeft>
        <Flag />
      </BasedContainer>
      <ActionButton to="/about">Explore</ActionButton>
    </Wrapper>
  );
}

export default HeroTitle;
