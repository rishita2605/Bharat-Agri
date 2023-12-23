import { FormFieldsType } from "../../shared/input";

export enum SignUpFormFields {
  userName = 'userName',
  password = 'password'
}

export type SignUpFormType = {
  [field in SignUpFormFields]: FormFieldsType
}