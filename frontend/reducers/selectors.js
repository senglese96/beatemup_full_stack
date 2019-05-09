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

export const groupEvents = (entities, groupId) => {
    let newEvents =[];
    let events = Object.values(entities.events);
    events.forEach(element => {
        if(element.groupId === groupId){
            newEvents.push(element);
        }
    })
    return newEvents;
}

export const eventAttendees = (entities, eventId) => {
    let newAttendances = [];
    let attendances = Object.values(entities.attendances);
    let user
    attendances.forEach(element => {
        if (element.eventId === eventId) {
            user = entities.users[element.attendeeId]
            newAttendances.push(user)
        }
    });
    return newAttendances;
}

export const eventGroup = (entities, eventId)=> {
    if(entities.events[eventId]){
        return entities.groups[entities.events[eventId].groupId]
    }
    return null;
}

export const getHost =(entities, event) => {
    if(event){
        return entities.users[event.hostId]
    }
    return null;
}