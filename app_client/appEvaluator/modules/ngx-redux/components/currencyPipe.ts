import { Pipe, PipeTransform } from '@angular/core';
//import * as fromRoot from './../common/reducers';
import * as fromRoot from '../../../entry/entry.reducer';

import { State, Store } from "@ngrx/store";

//const fx = require('money');
import * as fx from 'money';
fx.base = "USD";

@Pipe({
    name: 'currencyPipe',
})
export class CustomCurrencyPipe implements PipeTransform {

    /*
      One of the main advantages of Redux is that the state of the application can be
      observed from any file by simply implementing a selector and calling it where needed.
    */
    constructor(private _store: Store<fromRoot.State>) {
        this._store.let(fromRoot.getCurrencyRates).subscribe((rates) => {
            fx.rates = rates;
        });
    } 

    transform(value: number, currency): string {
        if (currency != null) {
            value = fx.convert(value, { from: "USD", to: currency });
            return currency + ' ' + value;
        } else {
            return 'USD' + ' ' + value;
        }
    }
}
