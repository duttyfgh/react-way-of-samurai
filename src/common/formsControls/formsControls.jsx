import { Field } from 'redux-form'
import classes from './formsControls.module.css'

export const FormControl = ({ input, meta: {touched, error}, children }) => {
    const hasError = touched && error
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (type, name, placeholder, validators, component, text = '', value) => {
    return (
        <div>
            {text}
            <Field type={type} name={name} placeholder={placeholder} validate={validators} component={component} value={value}/>
        </div>
    )

}