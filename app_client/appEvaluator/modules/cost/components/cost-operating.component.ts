
import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "cost-operating",
    templateUrl: "cost-operating.component.html"
})
export class CostOperatingComponent {
    getProjects() {
        return Array("Value Added Tax", "Value Added Tax", "DynamicCost", "Value Added Tax", "Value Added Tax");
    }
}
