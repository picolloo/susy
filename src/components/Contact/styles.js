import styled from "styled-components"
import { Form } from "formik"

import colors from "../../styles/colors"

export const Container = styled.div`
  padding: 80px 0 100px;
`

export const Content = styled.div`
  margin: auto;
  max-width: 1400px;
  color: ${colors.darkGray};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0;
  max-width: 600px;
  width: 100%;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem;

  > label {
    margin-bottom: 0.3rem;

    > span {
      color: ${colors.primary};
      margin-left: 0.2rem;
    }
  }

  > small {
    color: ${colors.primary};
  }

  > input,
  > textarea,
  > select {
    width: 100%;
    resize: none;
    border-radius: 4px;
    border: none;
    padding: 0.3rem 15px;
    outline: none;
    color: ${colors.darkGray};
    background-color: #f5f8fa;

    border: ${({ error }) =>
      error ? `1px solid ${colors.primary}` : "1px solid #cbd6e2"};
  }

  > select {
    line-height: 1.3;
    padding: 0.3rem 1.4em 0.3em 0.8em;
    appearance: none;
    cursor: pointer;

    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  width: 100%;
`

export const Button = styled.button`
  border-radius: 4px;
  padding: 0.3rem 0.8rem;
  outline: none;
  border: none;
  max-width: 105px;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  cursor: pointer;
  font-size: 16px;
  box-sizing: border-box;
  color: ${colors.white};
  border: 1px solid ${colors.primary};
  font-weight: 600;
  background: ${colors.primary};

  &:hover {
    border: 1px solid ${colors.primary};
    background: ${colors.white};
    color: ${colors.primary};
  }
`
