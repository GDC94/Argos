import { Blue, ChipRightContent, ChipText, White, Wrapper } from "./Chip.styles";

function Chip({ sinBandera }: { sinBandera?: boolean }) {
  return (
    <Wrapper>
      <ChipText>BASED IN ARGENTINA</ChipText>
      {sinBandera ? (
        <ChipRightContent>
          <Blue />
          <White />
          <Blue />
        </ChipRightContent>
      ) : null}
    </Wrapper>
  );
}

export default Chip;
