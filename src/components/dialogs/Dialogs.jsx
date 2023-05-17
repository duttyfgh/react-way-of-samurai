import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/formsControls/formsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import DialogItem from "./dialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./message/Message";

const Dialogs = (props) => {
  
  const state = props.dialogsPage

  const dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messagesElements = state.messagesData.map((message) => (
    <Message key={message.id} textMessages={message.textMessages} className={message.sender} />
  ));

  const addNewMessage = (velues) => {
    props.send(velues.newMessageText)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      
      <div className={classes.indexMargin}>
        <div className={classes.messages}>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />

      </div>
    </div>
  );
};

const maxLengt50 =  maxLengthCreator(50)

const AddMessageForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.shellInput}>
        <Field
          className={classes.userInput}
          placeholder="Напишите сообщение.."
          component={Textarea}
          name="newMessageText"
          validate={[required, maxLengt50]}
        />
        <button><i className={["fa-regular fa-paper-plane"]}></i></button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageform'
})(AddMessageForm)


export default Dialogs;
