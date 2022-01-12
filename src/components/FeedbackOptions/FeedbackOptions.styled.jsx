import styled from 'styled-components';
export const FeedbackOptionsBtn = styled.div`
  button {
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.62;
    text-align: center;
    background: #f5f4fa;
    border: none;
    border-radius: 4px;
    padding: 8px 26px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:not(:last-child) {
      margin-right: 34px;
    }
  }
  button:hover {
    color: #ffffff;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    &:nth-child(1) {
      background: green;
    }
    &:nth-child(2) {
      color: #000;
      background: yellow;
    }
    &:nth-child(3) {
      background: red;
    }
  }
`;
