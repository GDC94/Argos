import ContainerWrap from "@/components/commons/ContainerWrap/ContainerWrap";

import { Left, Right, Wrapper } from "./FrontPage.styles";
import FrontPageTitles from "./components/FrontPageTitles";

function FrontPage() {
  return (
    <ContainerWrap>
      <Wrapper>
        <Left>
          <FrontPageTitles />
        </Left>
        <Right>right</Right>
      </Wrapper>
    </ContainerWrap>
  );
}

export default FrontPage;
