import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
import * as actions from "./ngrx/actions"
import { RevenueModel } from "./ngrx/model";
import * as fromRoot from '../../entry/entry.reducer';

@Component({
    selector: "revenue",
    templateUrl: "revenue.component.html"
})
export class RevenueComponent {
    public revenueState: Observable<RevenueModel>;

    task: string = "settings";
    private tasks: string[];
        
    constructor(private _store: Store<fromRoot.State>) {
        this.revenueState = this._store.let(fromRoot.revenueState);

        this.tasks = new Array<string>(
            "Settings",
            "Taxes"
        );       
    }

    ngOnInit() {
        this.revenueState.subscribe(state => {
            if (state.hasLoaded == false) {
                this._store.dispatch(new actions.InitializeAction({}));
            }
        });
    }

    getTask(): string[] {
        return this.tasks;
    }

    onChange(e) {
        this.task = e.target.name;
    }

    loadRevenue() {
        console.log("loadRevenue");
    }

}
