import { Component, Inject, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

import { MODES, SharedState, SHARED_STATE } from "./../ngrx/actions";
import { ApplicationModel, BlueprintModel, Product, RevenueModel } from "../ngrx/model";
import * as fromRoot from '../../../entry/entry.reducer';
import * as actions from "../ngrx/actions"
import * as appActions from "../../../entry/ngrx/actions"


@Component({
    selector: "planning",
    templateUrl: "planning.component.html"
})
export class PlanningComponent {
    public blueprint: Observable<BlueprintModel>;
    public products: Observable<Product>;
    //public revenueEntityState: Observable<any>;
    public appState: Observable<any>;

    constructor(private _store: Store<fromRoot.State>) {
        this.blueprint = this._store.let(fromRoot.blueprintState);
        this.products = this._store.let(fromRoot.blueprintProductsState);
        //this.revenueEntityState = this._store.let(fromRoot.revenueEntityState);

        this.appState = this._store.let(fromRoot.appState);

    }

    changeScopeHandler(scope: number) {
        this._store.dispatch(new appActions.ChangeScopeAction({
            scope: scope
        }));
        
        setTimeout(() => {
            this._store.dispatch(new actions.ChangeScopeAction({
                scope: scope
            }));
        }, 400);
    }

    addProduct() {
        this._store.dispatch(new actions.InitializeAction({
            scope: 0
        }));
    }


    ngOnInit() {

        //console.group("group start");
        //const nextState = reducer(currentState, action);
        //console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, 123);
        //console.log(`%c action`, `color: #03A9F4; font-weight: bold`, 234);
        //console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, 345);
        //console.groupEnd();

        //console.log('the payload string is: ' + action.payload.innerObj.text);

    }

}

/*
export function logger(reducer) {
    return function newReducer(state, action) {
        console.group(action.type);
        const nextState = reducer(currentState, action);
        console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
        console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
        console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
        console.groupEnd();
        return nextState;
    }
}
*/


/*

export class TagShapeComponent {
  tagShape: string;
  @Output() selectShapeEvent = new EventEmitter();

  constructor() { }

  selectShape(shape: string) {
    this.selectShapeEvent.emit(shape);
  }
}

<label class="tagShape col-sm-3">
  <img src="/assets/images/circle.svg">
  <input
    type="radio"
    name="shape"
    [(ngModel)]="tagShape"
    (change)="selectShape(tagShape)"
    value="circle">
</label>

(selectShapeEvent)="selectShapeHandler($event)"></app-tag-shape>

selectShapeHandler(shape: string) {
  this.store.dispatch({
    type: SELECT_SHAPE,
    payload: shape
  });
}

*/