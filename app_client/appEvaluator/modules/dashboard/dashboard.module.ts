import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from "./dashboard.component";
import { DashboardPanelComponent } from "./components/dashboard-panel.component";
import { ConnectRemoteComponent } from "./components/connect-remote.component";


import { DashboardService } from "./ngrx/service";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, NgbModule.forRoot()],
  declarations: [DashboardComponent, DashboardPanelComponent, ConnectRemoteComponent],
  exports: [DashboardComponent, DashboardPanelComponent, ConnectRemoteComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
