// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Alert(props) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        width: 450px;
        height: 50px;
        padding: 5px 20px;
        gap: 10px;
        font-weight: 800;
        border-radius: 10px;
        color: grey;
        background-color: ${props.type === "error"
          ? "rgba(249, 200, 200, 1)"
          : props.type === "warning"
          ? "rgba(249, 217, 200, 1)"
          : props.type === "info"
          ? "rgba(249, 235, 200, 1)"
          : props.type === "success"
          ? "rgba(206, 247, 205, 1)"
          : "crimson"};
      `}
    >
      <p>
        {props.type === "error"
          ? "☹️"
          : props.type === "warning"
          ? "⚠️"
          : props.type === "info"
          ? "🚨"
          : props.type === "success"
          ? "✅"
          : "Incorrect type"}
      </p>
      <p>This is {props.type} alert box</p>
    </div>
  );
}
