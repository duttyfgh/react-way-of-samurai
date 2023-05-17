import classes from './../Dialogs.module.css';

const Message = (props) => {

  return (
    <div className={classes.messageBlock}>
      <div className={`${classes.message} ${classes[props.className]}`}>
        {props.textMessages}
      </div>
    </div>

  )
};

export default Message;

