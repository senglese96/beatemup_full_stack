import * as APIUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';
export const RECEIVE_GROUP_ERRORS = "RECEIVE_GROUP_ERRORS";

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

const receiveGroupErrors = errors => ({
    type: RECEIVE_GROUP_ERRORS,
    errors
})

export const fetchGroups = () => dispatch => {
    APIUtil.fetchGroups()
        .then(groups => dispatch(receiveGroups(groups)), errors => receiveGroupErrors(errors.responseJSON))
}

export const fetchGroup = groupId => dispatch => {
    APIUtil.fetchGroup(groupId)
        .then(group => dispatch(receiveGroup(group)), errors => receiveGroupErrors(errors.responseJSON))
}

export const createGroup = group => dispatch => {
    APIUtil.createGroup(group)
        .then(group => dispatch(receiveGroup(group)), errors => receiveGroupErrors(errors.responseJSON))
}

export const updateGroup = group => dispatch => {
    APIUtil.updateGroup(group)
        .then(group => dispatch(receiveGroup(group)), errors => receiveGroupErrors(errors.responseJSON))
}

export const deleteGroup = groupId => dispatch => {
    APIUtil.deleteGroup(groupId)
        .then(group => dispatch(removeGroup(group.id)), errors => receiveGroupErrors(errors.responseJSON))
}
