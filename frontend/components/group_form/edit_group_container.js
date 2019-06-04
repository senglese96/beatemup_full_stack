import { connect } from 'react-redux';
import { updateGroup, fetchGroup } from '../../actions/group_actions'
import GroupForm from './group_form'

const mapStateToProps = (state, ownProps) => {
    return {
        formType: 'edit',
        group: state.entities.groups[ownProps.match.params.groupId]
}}
const mapDispatchToProps = (dispatch, ownProps) => ({
    updateGroup: group => dispatch(updateGroup(group)),
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupForm)