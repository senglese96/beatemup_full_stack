import * as APIUtil from '../util/event_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';

const receiveGroups = groups => ({
    type: RECEIVE_GROUPS,
    groups
})

const receiveGroup = group => ({
    type: RECEIVE_GROUP,
    group
})

const removeGroup = groupId => ({
    type: REMOVE_GROUP,
    groupId
})

export const fetchGroups = () => dispatch => {
    APIUtil.fetchGroups()
        .then(groups => dispatch(receiveGroups(groups)))
}

export const fetchGroup = groupId => dispatch => {
    APIUtil.fetchGroup(groupId)
        .then(group => dispatch(receiveGroup(group)))
}

export const createGroup = group => dispatch => {
    APIUtil.createGroup(group)
        .then(group => dispatch(receiveGroup(group)))
}

export const updateGroup = group => dispatch => {
    APIUtil.updateGroup(group)
        .then(group => dispatch(receiveGroup(group)))
}

export const deleteGroup = groupId => dispatch => {
    APIUtil.deleteGroup(groupId)
        .then(group => dispatch(removeGroup(group.id)))
}
