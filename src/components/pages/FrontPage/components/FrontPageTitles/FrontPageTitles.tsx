import FlagComponent from "../../../../Flag/Flag";

import { Content, FrontEndDevSubTag, FrontEndDevTag, Wrapper } from "./FrontPageTitles.styles";

function FrontPageTitles() {
  return (
    <Wrapper>
      <FrontEndDevTag>FRONT END DEVELOPER</FrontEndDevTag>
      <Content>
        <FrontEndDevSubTag>BASED IN ARGENTINA</FrontEndDevSubTag>
        <FlagComponent />
      </Content>
      {/*<Light />
       */}{" "}
    </Wrapper>
  );
}

export default FrontPageTitles;
