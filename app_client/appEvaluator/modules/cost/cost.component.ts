import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
import * as actions from "./ngrx/actions"
import { CostModel } from "./ngrx/model";
import * as fromRoot from '../../entry/entry.reducer';

@Component({
  selector: "cost",
  templateUrl: "cost.component.html"
})
export class CostComponent {
    public costState: Observable<CostModel>;

    task: string = "settings";
    private tasks: string[];

    constructor(private _store: Store<fromRoot.State>) {
        this.costState = this._store.let(fromRoot.costState);

        this.tasks = new Array<string>(
            "Settings",
            "Operating",
            "Evaluate"
        );
    }

    ngOnInit() {
        this.costState.subscribe(state => {
            if (state.hasLoaded == false) {
                //this._store.dispatch(new actions.InitializeAction({}));
            }
        });
    }

    getTask(): string[] {
        return this.tasks;
    }

    onChange(e) {
        this.task = e.target.name;
    }

}
