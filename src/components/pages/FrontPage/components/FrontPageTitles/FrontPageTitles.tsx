import FlagComponent from "@/components/Flag/Flag";

import { FlagContainer, FrontEndDevTag, Wrapper } from "./FrontPageTitles.styles";

function FrontPageTitles() {
  return (
    <Wrapper>
      <FrontEndDevTag>FRONT END DEVELOPER</FrontEndDevTag>
      <FlagContainer>
        <FlagComponent />
      </FlagContainer>

      {/*<Light />
       */}
    </Wrapper>
  );
}

export default FrontPageTitles;
