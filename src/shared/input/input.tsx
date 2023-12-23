import classNames from 'classnames'
import React from 'react'
import { Col, Form, FormControlProps, InputGroup } from 'react-bootstrap'

type InputType = {
  type: string
  placeholder: string
  error: string
  required: boolean
  label: string
} & FormControlProps

export const Input: React.FC<InputType> = ({ error, label, children, className, ...rest }) => {
  const customClassname = classNames(className, 'ba-input')

  return (
    <Form.Group as={Col} md='40' className={customClassname}>
      <Form.Label>{label}</Form.Label>
      <InputGroup hasValidation>
        <Form.Control {...rest} />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  )
}
