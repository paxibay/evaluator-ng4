import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as update from 'immutability-helper';

import * as liquidityAction from './actions';
import { LiquidityModel } from "./model";

export interface State {
    liquidityState: LiquidityModel
};

const liquidity = new LiquidityModel();
liquidity.entity = { name: "entity cannot be empty" };

const initialState: State = {
    liquidityState: liquidity
};

export function reducer(state = initialState, action: liquidityAction.Actions): State {
    switch (action.type) {
        case liquidityAction.ActionTypes.INITIALIZE: {
            return state;
        }
        case liquidityAction.ActionTypes.LOAD_LIQUIDITY: {
            const newState = Object.assign({}, state, {
                liquidityState: Object.assign({}, action.payload, { hasLoaded: true })
            });

            return newState;
        }
        default:
            return state;
    }

};

export function getLiquidityState(state$: Observable<State>) {
    return state$.select(s => s.liquidityState);
}

export function getLiquidityEntityState(state$: Observable<State>) {
    return state$.select(s => s.liquidityState.entity);
}

export function getLiquidityValueObjectState(state$: Observable<State>) {
    return state$.select(s => s.liquidityState.valueObject);
}
