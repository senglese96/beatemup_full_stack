import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import eventsReducer from './events_reducer'
import groupsReducer from './groups_reducer'
import membershipReducer from './membership_reducer'
import attendanceReducer from './attendance_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    events: eventsReducer,
    groups: groupsReducer,
    memberships: membershipReducer,
    attendances: attendanceReducer
})

export default entitiesReducer