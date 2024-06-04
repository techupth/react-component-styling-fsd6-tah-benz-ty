// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Alert(props) {
  return (
    <div
      css={css`
        margin: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
        padding-left: 20px;
        width: 650px;
        height: 76px;
        font-family: "Kanit", sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #444444;
        border-radius: 10px;
        background-color: ${props.type === "error"
          ? "#F9C8C8"
          : props.type === "warning"
          ? "#F9D9C8"
          : props.type === "info"
          ? "#F9EBC8"
          : props.type === "success"
          ? "#CEF7CD"
          : ""};
      `}
    >
      <img
        src={props.img}
        alt="alert icon"
        css={css`
          margin-right: 20px;
        `}
      />
      <span>This is {props.type} alert box</span>
    </div>
  );
}
