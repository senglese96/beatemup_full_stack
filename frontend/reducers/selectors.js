export const groupSelector = (groups) => {
    return Object.values(groups)
}

export const groupMembers = (entities, groupId) => {
    let newMemberships = [];
    let memberships = Object.values(entities.memberships);
    let user
    memberships.forEach(element => {
        if(element.groupId === groupId){
            user = entities.users[element.memberId]
            newMemberships.push(user)
        }
    });
    return newMemberships;
}