import styled from "styled-components";

export const Btn_orng = styled.button`
  background-color: var(--orng-rgba);
  color: var(--white-rgba);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  padding: 0px 31px;
  border-radius: 100px;
  max-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn_active = styled.button`
  background-color: var(--blue-rgba);
  color: var(--white-rgba);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  border-radius: 100px;
  max-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.selectBtn {
    padding: 13.5px 18px;
  }
  &.sendBtn {
    padding: 30px 42px;
  }
`;
export const Btn_default = styled.button`
  color: var(--black-rgba);
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  max-height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 18px;
`;
export const Btn_link = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 100px;
`;

export const FieldesInput = styled.input`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: var(--blackText-rgba);
  border: none;
  outline: none;
  z-index: 20;
  opacity: 0.5;
  &:focus {
    opacity: 1;
  }
  &.filledInput {
    opacity: 1;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: var(--labelGray-rgba);
  z-index: 10;
  transition: all 0.2s ease-in-out;
  transform-origin: top;
  transform: translateY(0);
  ${FieldesInput}:focus + & {
    font-size: 12px;
    line-height: 18px;
    transform: translateY(-20px);
  }
  &.filledLabel {
    font-size: 12px;
    line-height: 18px;
    transform: translateY(-20px);
  }
`;

