import { type FormControlProps } from 'react-bootstrap'

export interface FormFieldsType {
  value?: string
  error?: string
}

export type InputType = {
  type: string
  placeholder: string
  required: boolean
  label: string
  error?: string
} & FormControlProps
