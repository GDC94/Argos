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
  AvailableForWork,
  RowDown,
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
          <FrontEndDevTag>Front end developer.</FrontEndDevTag>
          <FrontEndDevSubTag>based in Argentina</FrontEndDevSubTag>
          <FlagComponent />
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
