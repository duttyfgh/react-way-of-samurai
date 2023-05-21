import { useState } from 'react'
import classes from './DropDownPonel.module.css'

const DropDownPonel = (props) => {
    const [isPenActive, setPenActive] = useState(false)

    const onPenClickU = () => {
        setPenActive(false)
        props.setEditMode(false)
    }

    const onPenClickA = () => {
        setPenActive(true)
    }

    const editProfile = () => {
        props.setEditMode(true)
    }

    const saveChanges = () => {
        props.setEditMode(false)
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files[0]) {
            props.savePhoto(event.target.files[0])
        }
    }

    return (
        <div className={classes.profileSettings}>
            <div style={isPenActive ? null : { display: 'none' }} className={classes.dropdownPanel}>

                <div className={classes.changePhoto}>
                    <div>{
                        <label>
                            <i className={["fa-sharp fa-solid fa-image"]}></i> Change photo
                            <input onChange={onMainPhotoSelected} type={"file"} />
                        </label>
                    }</div>

                </div>
                {props.editMode
                    ? <div onClick={saveChanges } className={classes.editProfile}>
                        <i className={["fa-solid fa-check"]}></i> Save changes
                    </div>
                    : <div onClick={editProfile} className={classes.editProfile}>
                        <i className={["fa-solid fa-user"]}></i> Edit profile
                    </div>
                }

            </div>
            {isPenActive
                ? <div style={isPenActive ? { backgroundColor: '#1e1e1e' } : null} className={classes.settingsPen} onClick={onPenClickU}>
                    <i className={["fa-solid fa-xmark"]}></i>
                </div>
                : <div style={isPenActive ? { backgroundColor: '#1e1e1e' } : null} className={classes.settingsPen} onClick={onPenClickA}>
                    <i className={["fa-solid fa-pen"]}></i>
                </div>
            }

        </div>
    )
}

export default DropDownPonel