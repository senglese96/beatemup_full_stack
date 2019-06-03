export const fetchGroups = (constraints = {}) => {
    return $.ajax({
        method: 'GET',
        url: 'api/groups',
        data: { constraints }
    })
}

export const fetchGroup = (groupId) => {
    return $.ajax({
        method: 'GET',
        url: 'api/groups/' + groupId
    })
}

export const createGroup = group => {
    return $.ajax({
        method: 'POST',
        url: 'api/groups',
        data: group,
        processData: false,
        contentType: false
    })
}

export const updateGroup = group => {
    return $.ajax({
        method: 'PATCH',
        url: 'api/groups/' + group.id,
        data: { group }
    })
}

export const deleteGroup = (groupId) => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/groups/' + groupId
    })
}

export const createMembership = (groupId) => {
    return $.ajax({
        method: 'POST',
        url: 'api/groups/' + groupId + '/memberships'
    })
}