import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { State, Store } from "@ngrx/store";
import * as actions from "./ngrx/actions"
import { InvestModel} from "./ngrx/model";
import * as fromRoot from '../../entry/entry.reducer';

@Component({
  selector: "invest",
  templateUrl: "invest.component.html"
})
export class InvestComponent {
    public investState: Observable<InvestModel>;

    task: string = "settings";
    private tasks: string[];

    constructor(private _store: Store<fromRoot.State>) {
        this.investState = this._store.let(fromRoot.investState);

        this.tasks = new Array<string>(
            "Settings",
            "Investment"
        );
    }

    ngOnInit() {
        this.investState.subscribe(state => {
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
   
}
