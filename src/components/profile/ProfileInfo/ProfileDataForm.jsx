import twitter from '../../../assets/images/twitter.svg'
import gitHub from '../../../assets/images/gitHub.svg'
import instargamIcon from '../../../assets/images/instagram.svg'
import classes from '../profileStatus/profileStatus.module.css'
import React, { useState } from 'react'
import { createField, Input } from '../../../common/formsControls/formsControls'
import { maxLengthCreator } from '../../../utils/validators/validators'
import { reduxForm } from 'redux-form'

const ProfileDataForm = (props) => {
    const [status, setStatus] = useState(props.status)

    const diactivateEditMode = () => {
        props.updateStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <form onSubmit={props.handleSubmit} className={classes.outher}>
            {createField('text', 'userFullName', 'Enter your username', [], Input, '', props.profile.fullName)}

            <div className={classes.block}>
                <span className={classes.description}>{
                    props.profile.aboutMe
                        ? <textarea readOnly value={props.profile.aboutMe} />
                        : 'Тут должно бить описание но его нет :('
                }</span>
                <br />
                <button>save</button>
                <br />
                <input
                    className={classes.status}
                    value={status}
                    onBlur={diactivateEditMode}
                    onChange={onStatusChange} />

                <br />
                <div>{
                    props.profile.lookingForAJob
                        ? <span>Ищу роботу: <i style={{ color: '#6dd145' }} className={["fa-solid fa-check"]}></i></span>
                        : <span>Ищу роботу: <i style={{ color: '#d14e45' }} className={["fa-solid fa-xmark"]}></i></span>
                }</div>
                <div className={classes.socialNetWorks}>
                    <a href={'#'}><img src={instargamIcon} title={props.profile.contacts.instagram || 'Неуказано'} /></a>
                    <a href={'#'}><img src={gitHub} title={props.profile.contacts.github || 'Неуказано'} /></a>
                    <a href={'#'}><img src={twitter} title={props.profile.contacts.twitter || 'Неуказано'} /></a>
                </div>
            </div>


        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'editProfile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm