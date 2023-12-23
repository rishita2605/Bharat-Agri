import classNames from "classnames"
import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import { type InputType } from "."

export const Input: React.FC<InputType> = ({
  error,
  label,
  children,
  className,
  ...rest
}) => {
  const customClassname = classNames(className, "ba-input")

  return (
    <Form.Group as={"div"} className={customClassname}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control {...rest} />
        {error && (
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        )}
      </InputGroup>
    </Form.Group>
  )
}
