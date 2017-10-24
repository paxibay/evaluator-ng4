import { Component, Inject, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "connect-remote",
    templateUrl: "connect-remote.component.html"
})
export class ConnectRemoteComponent {
    @Input() entityState;
}
