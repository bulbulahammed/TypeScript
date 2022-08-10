import React from "react";
type ButtonStyleProps = {
  btnStyle: React.CSSProperties;
};

const ButtonStyle = (props: ButtonStyleProps) => {
  return <div style={props.btnStyle}>ButtonStyle</div>;
};

export default ButtonStyle;
