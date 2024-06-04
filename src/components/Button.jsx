// Start coding here
import { css } from "@emotion/react";

function Button(props) {
  let bgColor = undefined;
  if (props.color === "primary") {
    bgColor = "#074ee8";
  } else if (props.color === "secondary") {
    bgColor = "#07A4E8";
  }
}
return (
  <button
    css={css`
       display: block;
       background-color: ${bgColor};
       margin: 10px;
       width: 170px;
       height: 50px;
       border: none;
       border-radius: 40px;
       color: whight: 400;
       font-size: 16px;
      `}
  >
    {props.text}
  </button>
);

export default Button;
