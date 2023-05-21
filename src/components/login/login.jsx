import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { reduxForm } from "redux-form"
import { createField, Input } from "../../common/formsControls/formsControls"
import { login } from "../../redux/authReduser"
import { required } from "../../utils/validators/validators"
import classes from '../../common/formsControls/formsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>

      {createField('text', 'email', 'Email', [required], Input)}
      {createField('password', 'password', 'Password', [required], Input)}
      {createField('checkbox', 'rememberMe', null, [ ], Input, 'Remembers me')}

      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Sign up</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if (props.isAuth) {
    return <Navigate to='/profile' />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)