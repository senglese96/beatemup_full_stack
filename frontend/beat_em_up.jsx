import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import { signup, login } from  './actions/session_actions'
import {fetchGroups, fetchGroup} from './actions/group_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            }
        }

        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //TEST STUFF
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchGroups = fetchGroups;
    window.fetchGroup = fetchGroup;
    //TEST STUFF ENDS

    ReactDOM.render(<Root store={store}/>, root);
})