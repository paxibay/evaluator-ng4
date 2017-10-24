import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { InvestComponent } from "./invest.component";
import { InvestSettingsComponent } from "./components/invest-settings.component";
import { InvestInvestmentComponent } from "./components/invest-investment.component";
import { InvestTableComponent } from "./components/invest-table.component";
import { ConnectRemoteComponent } from "./components/connect-remote.component";

import { InvestService } from "./ngrx/service";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, NgbModule.forRoot()],
    declarations: [InvestComponent, InvestSettingsComponent, InvestInvestmentComponent, InvestTableComponent, ConnectRemoteComponent],
    exports: [InvestComponent, InvestSettingsComponent, InvestInvestmentComponent, InvestTableComponent, ConnectRemoteComponent],
    providers: [InvestService]
})
export class InvestModule { }
