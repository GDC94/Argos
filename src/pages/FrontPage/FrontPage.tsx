import { NavMenu } from "@/components/NavMenu";
import ContainerWrap from "@/components/commons/ContainerWrap/ContainerWrap";

import { Wrapper } from "./FrontPage.styles";
import HeroTitle from "./components/HeroTitle";
import HeroNav from "./components/HeroNav";
import Eyes from "./components/Eyes";

function FrontPage() {
  return (
    <ContainerWrap>
      <Wrapper>
        <NavMenu />
        <Eyes />
        <HeroTitle />
        <HeroNav />
      </Wrapper>
    </ContainerWrap>
  );
}

export default FrontPage;
