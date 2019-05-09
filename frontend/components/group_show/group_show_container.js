import { fetchGroup, joinGroup } from '../../actions/group_actions'
import { groupMembers, groupEvents } from '../../reducers/selectors'
import {connect} from 'react-redux'
import GroupShow from './group_show'

const mapStateToProps = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    users: groupMembers(state.entities, parseInt(ownProps.match.params.groupId)),
    currentUser: state.entities.users[state.session.id],
    events: groupEvents(state.entities, parseInt(ownProps.match.params.groupId))
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchGroup: groupId => dispatch(fetchGroup(groupId)),
    joinGroup: groupId  => dispatch(joinGroup(groupId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupShow)
