import twitter from '../../../assets/images/twitter.svg'
import gitHub from '../../../assets/images/gitHub.svg'
import instargamIcon from '../../../assets/images/instagram.svg'
import classes from './profileStatus.module.css'
import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeteEditMode = () => {
        setEditMode(true)
    }
    const diactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div className={classes.outher}>
            <span className={classes.userName}>
                {props.profile.fullName}
            </span>
            <div className={classes.block}>
                <span className={classes.description}>{
                    props.profile.aboutMe
                        ? <textarea readOnly value={props.profile.aboutMe} />
                        : 'Тут должно бить описание но его нет :('
                }</span>
                <br />
                {editMode &&
                    <input
                        autoFocus
                        className={classes.status}
                        value={status}
                        onBlur={diactivateEditMode}
                        onChange={onStatusChange}
                    />}
                {!editMode &&
                    <span onDoubleClick={() => { props.isOwner && activeteEditMode() }} style={{ color: '#d8d9da' }}>
                        Status:
                        <span title='кликни 2 раза чтоб изменить'>{
                            status || 'undefined'}</span></span>}
                <br />
                <div>{
                    props.profile.lookingForAJob
                        ? <div className={classes.lookingForAJob}>
                            <span style={{ color: '#d8d9da' }}>Looking for a job:
                                <i style={{ color: '#6dd145' }} className={["fa-solid fa-check"]}></i></span>
                            <br />
                            <span style={{ color: '#d8d9da' }}>My profesional skils:
                            </span>{props.profile.lookingForAJobDescription}
                        </div>
                        : <span>Looking for a job: <i style={{ color: '#d14e45' }} className={["fa-solid fa-xmark"]}></i></span>
                }</div>
                <div className={classes.socialNetWorks}>
                    <span>Contacts: </span> {Object.keys(props.profile.contacts).map(key => {
                        return <Contact contactTitle={key} key={key} contactValue={props.profile.contacts[key]} />
                    })}
                </div>
            </div>
        </div>
    )

}

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={classes.contact}><span>{contactTitle}: </span>{contactValue}</div>
    )
}

export default ProfileStatusWithHooks
