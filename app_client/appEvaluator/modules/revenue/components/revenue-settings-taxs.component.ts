import { Component, Inject, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: "revenue-settings-taxs",
    templateUrl: "revenue-settings-taxs.component.html"
})
export class RevenueSettingsTaxsComponent {
    @Input() revenueEntityState;
    @Input() products: Array<any>;
}
