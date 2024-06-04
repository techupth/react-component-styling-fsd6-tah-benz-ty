// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  return (
    <div>
      <div
        css={css`
          display: flex;
          width: 100%;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <p>{props.type}</p>
        {props.type === "Primary" ? (
          <button
            css={css`
              padding: 10px 30px;
              background-color: #074ee8;
              flex-basis: 50%;
              border-radius: 4px;
            `}
          >
            Large
          </button>
        ) : props.type === "Secondary" ? (
          <button
            css={css`
              padding: 10px 30px;
              background-color: #07a4e8;
              flex-basis: 50%;
              border-radius: 4px;
            `}
          >
            Large
          </button>
        ) : props.type === "Error" ? (
          <button
            css={css`
              padding: 10px 30px;
              background-color: #de5753;
              flex-basis: 50%;
              border-radius: 4px;
            `}
          >
            Large
          </button>
        ) : props.type === "Success" ? (
          <button
            css={css`
              padding: 10px 30px;
              background-color: #26b795;
              flex-basis: 50%;
              border-radius: 4px;
            `}
          >
            Large
          </button>
        ) : null}
      </div>
    </div>
  );
}
