import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirectComponent } from "../../hoc/withAuthRedirect";
import { addMessageEctionCreater } from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";

//настройка пропсов / данних 
const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

//настройка коллбеков / функций
const mapDiapatchToProps = (dispatch) => {
  return {
    send: (newMessageText) => {
      dispatch(addMessageEctionCreater(newMessageText))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDiapatchToProps),
  withAuthRedirectComponent,
)(Dialogs)
