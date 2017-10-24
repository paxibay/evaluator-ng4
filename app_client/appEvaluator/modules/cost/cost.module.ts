import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ServiceModule } from "../../repo/repo.module";

import { CostComponent } from "./cost.component";
import { CostSettingsComponent } from "./components/cost-settings.component";
import { CostOperatingComponent } from "./components/cost-operating.component";
import { CostEvaluateComponent } from "./components/cost-evaluate.component";
import { ConnectRemoteComponent } from "./components/connect-remote.component";

import { CostService } from "./ngrx/service";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, NgbModule.forRoot(), ServiceModule],
    declarations: [CostComponent, CostSettingsComponent, CostOperatingComponent, CostEvaluateComponent, ConnectRemoteComponent],
    exports: [CostComponent, CostSettingsComponent, CostOperatingComponent, CostEvaluateComponent, ConnectRemoteComponent],
    providers: [CostService]
})
export class CostModule { }
