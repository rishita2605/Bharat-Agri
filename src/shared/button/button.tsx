import classNames from 'classnames'
import { ButtonProps, Button as ReactBootstrapButton } from 'react-bootstrap'

enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

type ButtonType = {
  customVariant?: ButtonVariant
  isLoading?: boolean
} & ButtonProps

export const Button: React.FC<ButtonType> = ({
  children,
  isLoading,
  disabled,
  className,
  customVariant = ButtonVariant.Primary,
  ...rest
}) => {
  const customClassname = classNames(className, 'ba-button', {
    'ba-button--primary': customVariant === ButtonVariant.Primary,
    'ba-button--secondary': customVariant === ButtonVariant.Secondary,
  })

  return (
    <ReactBootstrapButton disabled={isLoading || disabled} className={customClassname} {...rest}>
      {children}
    </ReactBootstrapButton>
  )
}
