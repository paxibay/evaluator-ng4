import { Component, Inject, Input, Output, EventEmitter } from "@angular/core";
import { ApplicationModel, BlueprintModel,RevenueModel } from "../ngrx/model";

@Component({
    selector: "planning-sphere",
    templateUrl: "planning-sphere.component.html"
})
export class PlanningSphereComponent {
    @Input() blueprint: BlueprintModel;
    //@Input() revenueEntityState;
    @Input() appState;
    
    @Output() changeScopeEvent = new EventEmitter;

}  