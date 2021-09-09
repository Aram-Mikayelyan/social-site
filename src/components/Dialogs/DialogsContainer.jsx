import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function mapStateToProps(state) {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
