import classes from './preloader.module.css'

const Preloader = (props) => {
    return (
        <div>
            <img className={classes.preloader} src={props.preloader} />
        </div>
    )
}

export default Preloader