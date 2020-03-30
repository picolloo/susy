import styled from "styled-components"
import { Form } from "formik"

import colors from "../../styles/colors"

export const Container = styled.div`
  padding: 100px 0 80px;
  background: ${colors.primary};
`

export const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  color: ${colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  margin-bottom: 0;

  > * + * {
    margin-top: 1rem;
  }
`

export const FormGroup = styled.div`
  display: flex;

  > label {
    width: 130px;
    display: inline-block;
  }

  > input,
  > textarea,
  > select {
    width: 300px;
    resize: none;
    border-radius: 4px;
    border: none;
    padding: 0.3rem 0.8rem;

    &:focus {
      outline: none;
    }
  }

  > select {
    line-height: 1.3;
    padding: 0.3rem 1.4em 0.3em 0.8em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.7em top 50%, 0 0;
    background-size: 0.65em auto, 100%;

    &::-ms-expand {
      display: none;
    }

    &:hover {
      border-color: #888;
    }

    &:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222;
      outline: none;
    }

    & option {
      font-weight: normal;
    }
  }
`

export const Button = styled.button`
  border-radius: 4px;
  padding: 0.3rem 0.8rem;
  outline: none;
  max-width: 105px;
  width: 100%;
  text-align: center;
  letter-spacing: 1px;
  cursor: pointer;
  font-size: 16px;

  color: ${colors.primary};

  &:hover {
    border: 1px solid ${colors.primary};
  }
`

export const ImageContainer = styled.div`
  flex: 1;
`
