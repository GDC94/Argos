import FlagComponent from "@/components/Flag/Flag";

import {
  FlagContainer,
  FrontEndDevSubTag,
  FrontEndDevTag,
  Wrapper,
} from "./FrontPageTitles.styles";

function FrontPageTitles() {
  return (
    <Wrapper>
      <FrontEndDevTag>FRONT END DEVELOPER</FrontEndDevTag>
      <FlagContainer>
        <FrontEndDevSubTag>BASED IN ARGENTINA</FrontEndDevSubTag>

        <FlagComponent />
      </FlagContainer>

      {/*<Light />
       */}
    </Wrapper>
  );
}

export default FrontPageTitles;
