import { GitHubIcon, LogoIcon } from "@/components/commons/imagery";

import { AnimatedLine } from "../AnimatedLine";
import StatusIndicator from "../StatusIndicator";

import {
  FreelanceTags,
  LeftContent,
  LogoContent,
  RightContent,
  Tag,
  TagsContent,
  TechnologiesContent,
  TechnologyTag,
  Wrapper,
} from "./HeroNav.styles";

function HeroNav() {
  return (
    <Wrapper>
      <LeftContent>
        <LogoContent>
          <LogoIcon />
          <TagsContent>
            <Tag>German Derbes Catoni</Tag>
            <Tag>Front end Developer</Tag>
          </TagsContent>
        </LogoContent>
      </LeftContent>
      <RightContent>
        <TechnologiesContent>
          <TechnologyTag>React</TechnologyTag>
          <TechnologyTag>Typescript</TechnologyTag>
          <TechnologyTag>Web3</TechnologyTag>
          <TechnologyTag>Solidity</TechnologyTag>
        </TechnologiesContent>
        <AnimatedLine />
        <FreelanceTags>
          <GitHubIcon />
          <StatusIndicator />
          <TechnologyTag>Available for freelance work</TechnologyTag>
        </FreelanceTags>
      </RightContent>
    </Wrapper>
  );
}

export default HeroNav;
