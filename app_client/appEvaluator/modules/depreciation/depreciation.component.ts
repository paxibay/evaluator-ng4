import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
import * as actions from "./ngrx/actions"
import { DepreciationModel } from "./ngrx/model";
import * as fromRoot from '../../entry/entry.reducer';

@Component({
  selector: "depreciation",
  templateUrl: "depreciation.component.html"
})
export class DepreciationComponent {
    public depreciationState: Observable<DepreciationModel>; 

    constructor(private _store: Store<fromRoot.State>) {
        this.depreciationState = this._store.let(fromRoot.depreciationEntityState);
    }

    ngOnInit() {
        this.depreciationState.subscribe(state => {
            if (state.hasLoaded == false) {
                this._store.dispatch(new actions.InitializeAction({}));
            }
        });
    }
}
