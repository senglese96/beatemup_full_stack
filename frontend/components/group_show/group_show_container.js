import { fetchGroup } from '../../actions/group_actions'
import { groupMembers } from '../../reducers/selectors'
import {connect} from 'react-redux'
import GroupShow from './group_show'

const mapStateToProps = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    users: groupMembers(state.entities, ownProps.match.params.groupId)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupShow)
