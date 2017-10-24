import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { State, Store } from "@ngrx/store";

import { BlueprintModel, Settings } from "../ngrx/model";
import * as fromRoot from '../../../entry/entry.reducer';
import * as actions from "../ngrx/actions"

@Component({
    selector: "blueprint-settings",
    templateUrl: "blueprint-settings.component.html",
})
export class BlueprintSettingsComponent {
    public evaluationCriterionId: Observable<number>;
    public evaluationSystemId: Observable<number>;

    public evaluationCriterion: Observable<Array<any>>;
    public evaluationSystem: Observable<Array<any>>;

    public blueprintEntityState: Observable<any>;
    public valueObjectState: Observable<any>;

    constructor(private _store: Store<fromRoot.State>) {
        this.evaluationCriterionId = this._store.let(fromRoot.blueprintEvaluationCriterionOptionState);
        this.evaluationSystemId = this._store.let(fromRoot.blueprintEvaluationSystemState);
        this.blueprintEntityState = this._store.let(fromRoot.blueprintEntityState);
        this.valueObjectState = this._store.let(fromRoot.blueprintValueObjectState);
    }

    ngOnInit() {
        
    }
 
    evaluationCriterionHandler(value: number) {
        console.log(value);
        this._store.dispatch(new actions.VerifyOptionAction({
            evaluationCriterionId: value,
            evaluationSystemId: -1
        }));
    }

    evaluationSystemHandler(value: number) {
        console.log(value);
        this._store.dispatch(new actions.VerifyOptionAction({
            evaluationCriterionId: -1,
            evaluationSystemId: value
        }));
    }

}
