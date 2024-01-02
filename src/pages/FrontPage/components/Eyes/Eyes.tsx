import { Wrapper } from "./Eyes.styles";

function Eyes() {
  return (
    <Wrapper>
      <svg id="svg" viewBox="300 150 3800 500">
        <g id="left-eye">
          <circle
            className="eye-outer"
            cx={400}
            cy={500}
            r={100}
            stroke="#000000"
            strokeWidth={4}
            fill="#fff"
          />
          <circle className="eye-inner" cx={480} cy={500} r={20} fill="#0f0f0f" />
        </g>
        <g id="right-eye">
          <circle
            className="eye-outer"
            cx={600}
            cy={500}
            r={100}
            stroke="#000000"
            strokeWidth={4}
            fill="#fff"
          />
          <circle className="eye-inner" cx={680} cy={500} r={20} fill="#0f0f0f" />
        </g>
      </svg>
    </Wrapper>
  );
}

export default Eyes;
