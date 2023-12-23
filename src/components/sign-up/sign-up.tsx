export const SignUp: React.FC = () => {
  return (
    <div className='sign-up'>
      <form action='' className='sign-up__form'>
        <div className='sign-up__form__header'>Hey there, it’s good to see you again!</div>
        <input className='sign-up__form__input' placeholder='Username.' />
        <input className='sign-up__form__input' placeholder='Password.' type='password' />
      </form>
    </div>
  )
}
