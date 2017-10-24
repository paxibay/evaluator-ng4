import { NgModule, EventEmitter } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServiceModule } from "../../repo/repo.module";
import { RevenueComponent } from "./revenue.component";
import { RevenueSettingsComponent } from "./components/revenue-settings.component";
import { RevenueTaxesComponent } from "./components/revenue-taxes.component";
import { RevenueTableComponent } from "./components/revenue-table.component";
import { RevenueSettingsVatComponent } from "./components/revenue-settings-vat.component";
import { RevenueSettingsTaxsComponent } from "./components/revenue-settings-taxs.component";

import { RevenueService } from "./ngrx/service";

const COMPONENTS = [
    RevenueComponent,
    RevenueSettingsComponent,
    RevenueTaxesComponent,
    RevenueTableComponent,
    RevenueSettingsVatComponent,
    RevenueSettingsTaxsComponent,
];


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModule.forRoot(), ServiceModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    providers: [RevenueService]
})
export class RevenueModule { }
