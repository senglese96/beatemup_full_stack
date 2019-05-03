import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

const receiveEvents = events => ({
    type: RECEIVE_EVENTS,
    events
})

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})

const removeEvent = eventId => ({
    type: REMOVE_EVENT,
    eventId
})

export const fetchEvents = () => dispatch => {
    APIUtil.fetchEvents()
        .then(events => dispatch(receiveEvents(events)))
}

export const fetchEvent = eventId => dispatch => {
    APIUtil.fetchEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
}

export const createEvent = event => dispatch => {
    APIUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
}

export const updateEvent = event => dispatch => {
    APIUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)))
}

export const deleteEvent = eventId => dispatch => {
    APIUtil.deleteEvent(eventId)
        .then(event => dispatch(removeEvent(event.id)))
}
