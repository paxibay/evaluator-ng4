import { Component, Inject, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationModel, BlueprintModel, RevenueModel } from "../ngrx/model";

@Component({
    selector: "revenue-settings-vat",
    templateUrl: "revenue-settings-vat.component.html"
})
export class RevenueSettingsVatComponent {
    @Input() revenueEntityState;
    @Input() revenueProjectRevenueState;
    

}
