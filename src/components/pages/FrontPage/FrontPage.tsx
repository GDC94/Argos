import ContainerWrap from "@/components/commons/ContainerWrap/ContainerWrap";

import { Wrapper, RowTop, RowDown } from "./FrontPage.styles";
import Header from "./components/Header";
import FrontPageTitles from "./components/FrontPageTitles";
import FreelanceTags from "./components/FreelanceTags";

function FrontPage() {
  return (
    <ContainerWrap>
      <Wrapper>
        <RowTop>
          <Header />
          <FrontPageTitles />
        </RowTop>
        <RowDown>
          <FreelanceTags />
        </RowDown>
        {/*
        <RowTop>
        <Header />
        <FrontPageTitles />
      </RowTop>
      <RowDown>
        <FreelanceTags />
      </RowDown>
      */}
      </Wrapper>
    </ContainerWrap>
  );
}

export default FrontPage;
