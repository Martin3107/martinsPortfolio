import React from "react";
import { StyledPaper, StyledDiv, StyledProfile, LioAvatar } from "./styles";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div>
      <StyledDiv>
        <StyledProfile>
          {" "}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",

              justifyItems: "center",
            }}
          >
            <LioAvatar /> <LioAvatar />
          </div>
        </StyledProfile>
        <StyledPaper> </StyledPaper>{" "}
      </StyledDiv>
    </div>
  );
}
