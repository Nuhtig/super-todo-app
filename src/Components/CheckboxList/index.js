import { connect } from 'react-redux';
import CheckboxList from './CheckboxList';
import { addSelectTodo, removeSelectTodo, getTodo } from '../../Actions/todoActions';

const mapStateToProps = (state) => ({
  checked: state.checked
})

export default connect(mapStateToProps, { addSelectTodo, removeSelectTodo, getTodo })(CheckboxList);