import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

export const ActionTypes = {
    CHANGE_CURRENCY: 'Change currency',
    LOAD_CURRENCY_RATES: 'Loading currency rates',
    LOAD_RATES_COMPLETE: 'Load rates complete'
};

export class ChangeCurrencyAction implements Action {
    type = ActionTypes.CHANGE_CURRENCY;
    constructor(public payload: string) { }
}

export class LoadCurrencyRatesAction implements Action {
    type = ActionTypes.LOAD_CURRENCY_RATES;
    constructor(public payload: string) { }

}

export class LoadRatesCompleteAction implements Action {
    type = ActionTypes.LOAD_RATES_COMPLETE;
    constructor(public payload: string) { }
}


@Injectable()
export class CurrencyActions {
    static CHANGE_CURRENCY = 'Change currency';
    static LOAD_CURRENCY_RATES = 'Loading currency rates';
    static LOAD_RATES_COMPLETE = 'Load rates complete';

    ChangeCurrency(payload: string): Action {
        return {
            type: CurrencyActions.CHANGE_CURRENCY,
            payload: payload
        }
    }

    LoadCurrencyRates(payload: string): Action {
        return {
            type: CurrencyActions.LOAD_CURRENCY_RATES,
            payload: payload
        }
    }

    LoadRatesComplete(payload: string): Action {
        return {
            type: CurrencyActions.LOAD_RATES_COMPLETE,
            payload: payload
        }
    }
}



export type Actions =
    ChangeCurrencyAction |
    LoadCurrencyRatesAction |
    LoadRatesCompleteAction
