import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) => {
  return (
    <InputDiv>
      <AddModalLabel htmlFor={props.id}>{props.labelName}</AddModalLabel>
      <AddModalInput
        ref={ref}
        type={props.type}
        name={props.id}
        id={props.id}
        onKeyUp={props.onKeyUp}
      />
    </InputDiv>
  );
});

export default Input;

/*










*/
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddModalInput = styled.input`
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.4rem 0.2rem;
  color: #383838;

  &:focus {
    outline: none;
    background: #fff1c4;
  }
`;

const AddModalLabel = styled.label`
  font-weight: bold;
  margin: 0.5rem 0;
  color: #464646;
`;
