import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import {ApplicationService } from "./service";
import { ApplicationModel } from "./model";
import * as appActions from './actions';

@Injectable()
export class AppEffects {

    constructor(
        private actions: Actions,
        private service: ApplicationService,
    ) { }

    @Effect() initialApp$ = this.actions
        .ofType(appActions.ActionTypes.INITIALIZE)
        .switchMap(() => 
            this.service.Application
                .map(app => ({ type: appActions.ActionTypes.LOAD_APPMODEL, payload: app}))
                .catch(() => Observable.of({ type: appActions.ActionTypes.INITIALIZE }))
        );

}

