import Image from "next/image";

import {
  LogoContent,
  Tag,
  TagsContent,
  TechnologiesContent,
  TechnologyTag,
  Wrapper,
} from "./HeroNav.styles";

function HeroNav() {
  return (
    <Wrapper>
      <LogoContent>
        <Image src="/logoSVG.svg" alt="" width={80} height={80} />
        <TagsContent>
          <Tag>German Derbes Catoni</Tag>
          <Tag>Front end Developer</Tag>
        </TagsContent>
      </LogoContent>
      <TechnologiesContent>
        <TechnologyTag>React</TechnologyTag>
        <TechnologyTag>Typescript</TechnologyTag>
        <TechnologyTag>Web3</TechnologyTag>
        <TechnologyTag>Solidity</TechnologyTag>
      </TechnologiesContent>
    </Wrapper>
  );
}

export default HeroNav;
