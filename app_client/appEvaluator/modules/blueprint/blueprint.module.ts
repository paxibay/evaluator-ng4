import { NgModule, EventEmitter } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { Store, StoreModule } from "@ngrx/store";

//import { EffectsModule } from "@ngrx/effects";
//import { BlueprintEffects } from "./ngrx/effects";

import { ServiceModule } from "../../repo/repo.module";
import { BlueprintService } from "./ngrx/service";

import { BlueprintComponent } from "./blueprint.component";
import { BlueprintSettingsComponent } from "./components/blueprint-settings.component";
import { PlanningComponent } from "./components/planning.component";
import { PricingComponent } from "./components/pricing.component";
import { PropertiesComponent } from "./components/properties.component";
import { PlanningProductComponent } from "./components/planning-product.component";
import { PlanningSphereComponent } from "./components/planning-sphere.component";
import { BlueprintSettingsSphereComponent } from "./components/blueprint-settings-sphere.component";
import { BlueprintSettingsDurationComponent } from "./components/blueprint-settings-duration.component";


import { SharedState, SHARED_STATE } from "./ngrx/actions";
//const storeManager = StoreModule.provideStore({ currentSearch: SearchReducer });

const COMPONENTS = [
    BlueprintComponent,
    BlueprintSettingsComponent,
    PlanningComponent,
    PricingComponent,
    PropertiesComponent,

    PlanningProductComponent,
    PlanningSphereComponent,
    BlueprintSettingsSphereComponent,
    BlueprintSettingsDurationComponent
];

//const subject = new Subject<SharedState>();
//const subject = new EventEmitter<SharedState>();


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModule.forRoot(), ServiceModule, StoreModule],
    declarations: [...COMPONENTS],
    exports: [ServiceModule, ...COMPONENTS],
    providers: [BlueprintService]
    //providers: [BlueprintService, { provide: SHARED_STATE, useValue: subject }]
})
export class BlueprintModule { }
