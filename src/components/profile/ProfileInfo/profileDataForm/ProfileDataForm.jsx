import twitter from '../../../../assets/images/twitter.svg'
import gitHub from '../../../../assets/images/gitHub.svg'
import instargamIcon from '../../../../assets/images/instagram.svg'
import classes from './ProfileDataForm.module.css'
import React, { useEffect, useState } from 'react'
import { createField, Input, Textarea } from '../../../../common/formsControls/formsControls'
import { reduxForm } from 'redux-form'
import style from '../../../../common/formsControls/formsControls.module.css'

const ProfileDataForm = (props) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(true)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    const saveStatus = () => {
        props.updateStatus(status)

    }

    return (
        <form onSubmit={props.handleSubmit} className={classes.profileForm}>
            {props.error && <div className={style.formSummaryError}>{props.error}</div>}
            <div className={classes.userName}>
                {createField('text', 'fullName', 'enter your name', [], Input)}
            </div>
            <div className={classes.block}>
                <span className={classes.description}>{
                    createField('text', 'aboutMe', 'enter your description', [], Textarea)
                }</span>
                <br />
                <input
                    className={classes.status}
                    value={status}
                    onChange={onStatusChange} />
                <br />
                <div>
                    <div className={classes.lookingForAJob} style={{ display: 'flex' }}>
                        looking for a job:
                        {createField('checkbox', 'lookingForAJob', null, [], Input)}
                    </div>
                </div>
                <div>
                    <div className={classes.lookingForAJobDescription} style={{ display: 'flex' }}>
                        My profesional skils:
                        {createField('text', 'lookingForAJobDescription', 'your profesional skils', [], Textarea)}
                    </div>
                </div>

                <div className={classes.socialNetWorks}>
                    <b>Contacts: </b> {Object.keys(props.profile.contacts).map(key => {
                        return <div key={key} className={classes.contact}>
                        <span>{key}: </span><br/>{createField('text', `contacts.${key}`, `enter your ${key}`, [], Input)}</div>
                    })}
                </div>
            </div>
            <div className={classes.futer}>
                <button onClick={saveStatus}>Save hanges</button>
            </div>
        </form>
    )

}

const ProfileDataFormReduxForm = reduxForm({
    form: 'editProfile',

})(ProfileDataForm)

export default ProfileDataFormReduxForm
