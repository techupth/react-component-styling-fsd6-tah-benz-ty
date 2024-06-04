// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  return (
    <button
      css={css`
        display: block;
        background-color: ${props.color};
        margin: 10px;
        width: 170px;
        height: 50px;
        border: none;
        border-radius: 4px;
        color: white;
        font-weight: 400;
        font-size: 16px;
        font-family: "Sarabun", sans-serif;
      `}
    >
      Button
    </button>
  );
}
