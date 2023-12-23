import React, { useState, type ChangeEvent } from 'react'
import { SignUpFormFields, SignUpFormType } from '.'
import { Button } from '../../shared/button/button'
import { Input, type FormFieldsType } from '../../shared/input'

const initialInputState: SignUpFormType = {
  userName: {
    value: '',
    error: undefined
  },
  password: {
    value: '',
    error: undefined
  }
}

export const SignUp: React.FC = () => {
  // States.
  const [formValues, setFormValues] = useState<SignUpFormType>(initialInputState)

  // Handlers.
  const onSubmit = (event: any): void => {
    event.preventDefault()
  }

  const formChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: SignUpFormFields
  ): void => {
    setFormValues((prevValue: SignUpFormType) => {
      const res: FormFieldsType = {
        value: event.target.value,
        error: undefined
      }

      return {
        ...prevValue,
        [field]: res
      }
    })
  }

  return (
    <div className='sign-up'>
      <form className='sign-up__form'>
        <div className='sign-up__form__header'>Hey there, it’s good to see you again!</div>
        <Input
          type='text'
          placeholder='Please enter your username'
          label='Username.'
          error={formValues.userName.error}
          value={formValues.userName.value}
          onChange={(event) => {
            formChange(event, SignUpFormFields.userName)
          }}
          required
        />

        <Input
          type='password'
          placeholder='Please enter your password'
          label='Password.'
          error={formValues.password.error}
          value={formValues.password.value}
          onChange={(event) => {
            formChange(event, SignUpFormFields.password)
          }}
          required
        />

        <Button onClick={onSubmit}>Sign In.</Button>
      </form>
    </div>
  )
}
