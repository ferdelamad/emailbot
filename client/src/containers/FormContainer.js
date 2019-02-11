import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import {
  updateField,
  updateDisplayedTemplate,
  addRecipient,
  removeRecipient,
  updateResponse,
} from '../actions/actions';

const mapStateToProps = state => ({
  form: state.formReducer,
  templates: state.templatesReducer,
  recipients: state.recipientsReducer,
  currentUser: { name: state.userReducer.name, email: state.userReducer.email },
});

const mapDispatchToProps = dispatch => ({
  updateField: (q) => {
    dispatch(updateField(q));
  },
  updateDisplayedTemplate: (q) => {
    dispatch(updateDisplayedTemplate(q));
  },
  updateResponse: (q) => {
    dispatch(updateResponse(q));
  },
  addRecipient: (q) => {
    dispatch(addRecipient(q));
  },
  removeRecipient: (q) => {
    dispatch(removeRecipient(q));
  },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default SearchContainer;
