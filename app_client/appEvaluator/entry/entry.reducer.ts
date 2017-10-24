import { combineReducers, ActionReducer } from "@ngrx/store";
import { Observable }         from "rxjs";
import { compose }            from "@ngrx/core";

import * as fromOperations    from "../modules/ngx-redux/common/reducers/operations";
import * as fromCurrencies    from "../modules/ngx-redux/common//reducers/currencies";

import * as fromApp           from "./ngrx/reducer";
import * as fromBlueprint     from "../modules/blueprint/ngrx/reducer";
import * as fromCost          from "../modules/cost/ngrx/reducer";
import * as fromDashboard     from "../modules/dashboard/ngrx/reducer";
import * as fromDepreciation  from "../modules/depreciation/ngrx/reducer";
import * as fromFunds         from "../modules/funds/ngrx/reducer";
import * as fromInvest        from "../modules/invest/ngrx/reducer";
import * as fromLiquidity     from "../modules/liquidity/ngrx/reducer";
import * as fromRevenue       from "../modules/revenue/ngrx/reducer";


/**
 * Treat each reducer like a table in a database. This means our top
 * level state interface is just a map of keys to inner state types.
 */
export interface State {
    operations: fromOperations.State;
    currencies: fromCurrencies.State;
    blueprint: fromBlueprint.State;
    revenue: fromRevenue.State;
    appState: fromApp.State;
    liquidityState: fromLiquidity.State;
    investState: fromInvest.State;
    fundsState: fromFunds.State;
    depreciationState: fromDepreciation.State;
    dashboardState: fromDashboard.State;
    costState: fromCost.State;
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
    operations: fromOperations.reducer,
    currencies: fromCurrencies.reducer, 
    blueprint: fromBlueprint.reducer,
    revenue: fromRevenue.reducer,
    appState: fromApp.reducer,
    liquidityState: fromLiquidity.reducer,
    investState: fromInvest.reducer,
    fundsState: fromFunds.reducer,
    depreciationState: fromDepreciation.reducer,
    dashboardState: fromDashboard.reducer,
    costState: fromCost.reducer
};

const combinedReducer: ActionReducer<State> = combineReducers(reducers);
export function reducer(state: any, action: any) {
    return combinedReducer(state, action);
}


export function getAppState(state$: Observable<State>) {
    return state$.select(state => state.appState);
}

export function getOperations(state$: Observable<State>) {
    return state$.select(state => state.operations);
}

export function getCurrencies(state$: Observable<State>) {
    return state$.select(state => state.currencies);
}

export function getBlueprintState(state$: Observable<State>) {
    return state$.select(state => state.blueprint);
}

export function getRevenueState(state$: Observable<State>) {
    return state$.select(state => state.revenue);
}

export function getLiquidityState(state$: Observable<State>) {
    return state$.select(state => state.liquidityState);
}

export function getInvestState(state$: Observable<State>) {
    return state$.select(state => state.investState);
}

export function getFundsState(state$: Observable<State>) {
    return state$.select(state => state.fundsState);
}

export function getDepreciationState(state$: Observable<State>) {
    return state$.select(state => state.depreciationState);
}

export function getDashboardState(state$: Observable<State>) {
    return state$.select(state => state.dashboardState);
}

export function getCostState(state$: Observable<State>) {
    return state$.select(state => state.costState);
}

export const appState = compose(fromApp.getAppState, getAppState);

export const blueprintState = compose(fromBlueprint.getBlueprintState, getBlueprintState);
export const blueprintProductsState = compose(fromBlueprint.getProductsState, getBlueprintState);
export const blueprintEvaluationCriterionOptionState = compose(fromBlueprint.getEvaluationCriterionOptionState, getBlueprintState);
export const blueprintEvaluationSystemState = compose(fromBlueprint.getEvaluationSystemState, getBlueprintState);
export const blueprintValueObjectState = compose(fromBlueprint.getValueObjectState, getBlueprintState);
export const blueprintEntityState = compose(fromBlueprint.getEntityState, getBlueprintState);

export const revenueState = compose(fromRevenue.getRevenueState, getRevenueState);
export const revenueEntityState = compose(fromRevenue.getEntityState, getRevenueState);
export const revenueProjectRevenueState = compose(fromRevenue.getProjectRevenueState, getRevenueState);

export const liquidityState = compose(fromLiquidity.getLiquidityState, getLiquidityState);
export const liquidityEntityState = compose(fromLiquidity.getLiquidityEntityState, getLiquidityState);
export const liquidityValueObjectState = compose(fromLiquidity.getLiquidityValueObjectState, getLiquidityState);

export const investState = compose(fromInvest.getInvestState, getInvestState);
export const investEntityState = compose(fromInvest.getInvestEntityState, getInvestState);
export const investValueObjectState = compose(fromInvest.getInvestValueObjectState, getInvestState);

export const fundsState = compose(fromFunds.getFundsState, getFundsState);
export const fundsEntityState = compose(fromFunds.getFundsEntityState, getFundsState);
export const fundsValueObjectState = compose(fromFunds.getFundsValueObjectState, getFundsState);

export const depreciationState = compose(fromDepreciation.getDepreciationState, getDepreciationState);
export const depreciationEntityState = compose(fromDepreciation.getDepreciationEntityState, getDepreciationState);
export const depreciationValueObjectState = compose(fromDepreciation.getDepreciationValueObjectState, getDepreciationState);

export const dashboardState = compose(fromDashboard.getDashboardState, getDashboardState);
export const dashboardEntityState = compose(fromDashboard.getDashboardEntityState, getDashboardState);
export const dashboardValueObjectState = compose(fromDashboard.getDashboardValueObjectState, getDashboardState);

export const costState = compose(fromCost.getCostState, getCostState);
export const costEntityState = compose(fromCost.getCostEntityState, getCostState);
export const costValueObjectState = compose(fromCost.getCostValueObjectState, getCostState);

export const getEntities = compose(fromOperations.getEntities, getOperations);
export const getCurrencyEntities = compose(fromCurrencies.getCurrenciesEntities, getCurrencies);
export const getSelectedCurrency = compose(fromCurrencies.getSelectedCurrency, getCurrencies);
export const getCurrencyRates = compose(fromCurrencies.getRates, getCurrencies);