import twitter from '../../../assets/images/twitter.svg'
import gitHub from '../../../assets/images/gitHub.svg'
import instargamIcon from '../../../assets/images/instagram.svg'
import classes from './profileStatus.module.css'
import React, { useEffect, useState } from 'react'

const ProfileStatusWithHooks = (props) => {
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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
                <span  style={{ color: '#d8d9da' }}>
                    Cтатус:
                    <span>{
                        status || 'undefined'}</span></span>
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
        </div>
    )

}

export default ProfileStatusWithHooks
