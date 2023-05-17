import twitter from '../../../assets/images/twitter.svg'
import gitHub from '../../../assets/images/gitHub.svg'
import instargamIcon from '../../../assets/images/instagram.svg'
import classes from '../ProfileInfo/ProfileInfo.module.css'
import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeteEditMode = () => {
        this.setState({//setSate асинхронен
            editMode: true
        })
    }

    diactivateEditMode = () => {

        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)

    }

    onStatusChange = (event) => {

        this.setState({
            status: event.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })

        }
    }

    render() {

        return (
            <div className={classes.outher}>

                <span className={classes.userName}>{this.props.profile.fullName} <span>{this.props.profile.userId}</span></span>

                <div className={classes.block}>
                    <span className={classes.description}>{
                        this.props.profile.aboutMe
                            ? <textarea readOnly value={this.props.profile.aboutMe} />
                            : 'Тут должно бить описание но его нет :('
                    }</span>
                    <br />
                    {this.state.editMode
                        ? <input
                            onChange={this.onStatusChange}
                            autoFocus
                            onBlur={this.diactivateEditMode}
                            className={classes.status}
                            value={this.state.status} />
                        : <span onDoubleClick={this.activeteEditMode} style={{ color: '#d8d9da' }}>
                            Cтатус:
                            <span title='кликни 2 раза чтоб изменить'>{this.state.status || 'undefined'}</span></span>
                    }

                    <br />
                    <div>{
                        this.props.profile.lookingForAJob
                            ? <span>Ищу роботу: <i style={{ color: '#6dd145' }} class="fa-solid fa-check"></i></span>
                            : <span>Ищу роботу: <i style={{ color: '#d14e45' }} class="fa-solid fa-xmark"></i></span>
                    }</div>
                    <div className={classes.socialNetWorks}>
                        <a href={this.props.profile.contacts.instagram}><img src={instargamIcon} /></a>
                        <a href={this.props.profile.contacts.github}><img src={gitHub} /></a>
                        <a href={this.props.profile.contacts.twitter}><img src={twitter} /></a>
                    </div>
                </div>


            </div>
        )

    }
}

export default ProfileStatus