import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { StoreModule } from "@ngrx/store";
import { CommonModule } from "@angular/common";

import { NgxComponent } from './ngx.component';
import { NewOperation } from "./components/new-operation.component";
import { OperationsList } from "./components/operations-list.component";
//import { reducer } from "./common/reducers/index";
import { Currencies } from "./components/currencies.component";
//import { CurrencyEffects } from "./common/effects/currencies";
import { EffectsModule } from "@ngrx/effects";
import { CurrencyService } from "./common/services/currency.service";
import { CustomCurrencyPipe } from "./components/currencyPipe";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [
        NgxComponent,
        NewOperation,
        OperationsList,
        Currencies,
        CustomCurrencyPipe
    ],
    imports: [ // import Angular's modules
        NgbModule,
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        //EffectsModule.run(CurrencyEffects),
        //StoreModule.provideStore(reducer),
    ],
    providers: [CurrencyService],
    exports: [NgxComponent, NewOperation, OperationsList, Currencies, CustomCurrencyPipe],
})
export class NgxModule {
    constructor() { }
}
