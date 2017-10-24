import { Component, Inject, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: "blueprint-settings-sphere",
    templateUrl: "blueprint-settings-sphere.component.html",
})
export class BlueprintSettingsSphereComponent {
    @Input() evaluationCriterionId: number = 0;
    @Input() evaluationSystemId: number = 0;
    @Input() valueObjectState;

    @Output() evaluationCriterionEvent = new EventEmitter;
    @Output() evaluationSystemEvent = new EventEmitter;
    
}

 