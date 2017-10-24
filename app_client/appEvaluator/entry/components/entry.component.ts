import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";

import { ApplicationModel } from "../ngrx/model";
import * as fromRoot from '../entry.reducer';
import * as actions from "../ngrx/actions"



@Component({
  selector: "entry",
  templateUrl: "entry.component.html"
})
export class EntryComponent {
    appState: Observable<ApplicationModel>; 

    constructor(private _store: Store<fromRoot.State>) {
        this.appState = this._store.let(fromRoot.appState);
    }

    ngOnInit() {
        this.appState.subscribe(state => {
            if (state.hasLoaded == false) {
                this._store.dispatch(new actions.InitializeAction({}));
                //this._store.dispatch(new actions.InitializeAction({}));
                //this._store.dispatch(new actions.InitializeAction({}));
                //this._store.dispatch(new actions.InitializeAction({}));
            }
        });
    }

}