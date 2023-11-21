import FrontPageTitles from "../FrontPageTitles";
import Header from "../Header";

import { Wrapper, RowTop } from "./FrontPage.styles";

function FrontPage() {
  return (
    <Wrapper>
      <RowTop>
        <Header />
        <FrontPageTitles />
      </RowTop>
    </Wrapper>
  );
}

export default FrontPage;
