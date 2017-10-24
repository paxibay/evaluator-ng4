import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as dashboardAction from './actions';
import { DashboardModel } from "./model";

export interface State {
    dashboardState: DashboardModel
};
const dd = new DashboardModel();
dd.entity = {name: "entity cannot be empty"};

const initialState: State = {
    dashboardState: dd
};

export function reducer(state = initialState, action: dashboardAction.Actions): State {
    switch (action.type) {
        case dashboardAction.ActionTypes.INITIALIZE: {
            return state;
        }

        case dashboardAction.ActionTypes.LOAD_DASHBOARD: {
            const newState = Object.assign({}, state, {
                dashboardState: Object.assign({}, action.payload, { hasLoaded: true })
            });

            return newState;
        }
        default:
            return state;
    }

};

export function getDashboardState(state$: Observable<State>) {
    return state$.select(s => s.dashboardState);
}

export function getDashboardEntityState(state$: Observable<State>) {
    return state$.select(s => s.dashboardState.entity);
}

export function getDashboardValueObjectState(state$: Observable<State>) {
    return state$.select(s => s.dashboardState.valueObject);
}