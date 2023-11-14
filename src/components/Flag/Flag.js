import range from "lodash.range";

import { Flag, FlagWrapper } from "./Flag.styles";

function FlagComponent({ numOfColumns = 11, staggeredDelay = 80 }) {
  return (
    <Flag>
      {range(numOfColumns).map((columnIndex) => (
        <FlagWrapper
          key={columnIndex}
          style={{
            animationDelay: columnIndex * staggeredDelay + "ms",
          }}
        />
      ))}
    </Flag>
  );
}

export default FlagComponent;
