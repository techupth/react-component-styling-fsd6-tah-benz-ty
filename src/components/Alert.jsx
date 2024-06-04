// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Alert(props) {
  return (
    <div
      css={css`
      width = 650px;
      height = 76px;
      border:none;
      border-radius:10px;
      color : #444444;
      padding: 20px ;
      text-align:left;
      font-size:20px;
      display:flex;
    background-color:${
      props.type === "error"
        ? "#F9C8C8"
        : props.type === "warning"
        ? "#F9D9C8"
        : props.type === "info"
        ? "#F9EBC8"
        : props.type === "success"
        ? "#CEF7CD"
        : ""
    };
    `}
    >
      <img
        src={props.img}
        alt="alert icon"
        css={css`
          margin-right: 10px;
        `}
      />
      <span>This is {props.type} alert box</span>
    </div>
  );
}
