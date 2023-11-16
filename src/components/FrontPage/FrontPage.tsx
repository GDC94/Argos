import FlagComponent from "../Flag/Flag";
import ScrollDownComponent from "../ScrollDownComponent/ScrollDownComponent";

import {
  FrontEndDevSubTag,
  FrontEndDevTag,
  FrontPageTitles,
  FrontPageTag,
  Wrapper,
  WrapperLeft,
  RowTop,
  RowDown,
  Content,
  AvailableForWork,
} from "./FrontPage.styles";

function FrontPage() {
  return (
    <Wrapper>
      <RowTop>
        <FrontPageTitles>
          <FrontPageTag>German Derbes Catoni</FrontPageTag>
          <FrontPageTag>Portfolio 2023</FrontPageTag>
        </FrontPageTitles>
        <WrapperLeft>
          <FrontEndDevTag>FRONT END DEVELOPER</FrontEndDevTag>
          <Content>
            <FrontEndDevSubTag>BASED IN ARGENTINA</FrontEndDevSubTag>
            <FlagComponent />
          </Content>
        </WrapperLeft>
        <FrontPageTitles>
            <AvailableForWork>Available for freelance work</AvailableForWork>
            <AvailableForWork>Available for freelance work</AvailableForWork>
          </FrontPageTitles>
      </RowTop>
      <RowDown>
        <ScrollDownComponent />
      </RowDown>
    </Wrapper>
  );
}

export default FrontPage;
