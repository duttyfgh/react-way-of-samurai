import twitter from '../../../assets/images/twitter.svg'
import gitHub from '../../../assets/images/gitHub.svg'
import instargamIcon from '../../../assets/images/instagram.svg'
import classes from '../ProfileInfo/ProfileInfo.module.css'
import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

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

    const onMainPhotoSelected = (event) => {
       if (event.target.files[0]) {
        props.savePhoto(event.target.files[0])
       }
    }

    return (
        <div className={classes.outher}>

            <span className={classes.userName}>
                {props.profile.fullName}
            </span>
            <div>{props.isOwner && <input onChange={onMainPhotoSelected} type={"file"} />}</div>

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
                    <span onDoubleClick={activeteEditMode} style={{ color: '#d8d9da' }}>
                        Cтатус:
                        <span title='кликни 2 раза чтоб изменить'>{
                            status || 'undefined'}</span></span>}

                <br />
                <div>{
                    props.profile.lookingForAJob
                        ? <span>Ищу роботу: <i style={{ color: '#6dd145' }} className={["fa-solid fa-check"]}></i></span>
                        : <span>Ищу роботу: <i style={{ color: '#d14e45' }} className={["fa-solid fa-xmark"]}></i></span>
                }</div>
                <div className={classes.socialNetWorks}>
                    <a href={'#'}><img src={instargamIcon} /></a>
                    <a href={'#'}><img src={gitHub} /></a>
                    <a href={'#'}><img src={twitter} /></a>
                </div>
            </div>


        </div>
    )

}


export default ProfileStatusWithHooks
