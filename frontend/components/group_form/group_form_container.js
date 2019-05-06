import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions'
import GroupForm from './group_form'

const mapDispatchToProps = dispatch => ({
    createGroup: group => dispatch(createGroup(group))
})

export default connect(
    null,
    mapDispatchToProps
)