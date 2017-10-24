import { NgModule }             from "@angular/core";
import { BrowserModule }        from "@angular/platform-browser";
import { CommonModule }         from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule }           from "@angular/http";

import { StoreModule }          from "@ngrx/store";
import { StoreDevtoolsModule }  from "@ngrx/store-devtools";
import { EffectsModule }        from "@ngrx/effects";
import { AppEffects }           from "./ngrx/effects";
import { CurrencyEffects }      from "../modules/ngx-redux/common/effects/currencies";
import { BlueprintEffects }     from "../modules/blueprint/ngrx/effects";
import { RevenueEffects }       from "../modules/revenue/ngrx/effects";
import { CostEffects }          from "../modules/cost/ngrx/effects";
import { DashboardEffects }     from "../modules/dashboard/ngrx/effects";
import { DepreciationEffects }  from "../modules/depreciation/ngrx/effects";
import { FundsEffects }         from "../modules/funds/ngrx/effects";
import { InvestEffects }        from "../modules/invest/ngrx/effects";
import { LiquidityEffects }     from "../modules/liquidity/ngrx/effects";

import { ServiceModule }        from "../repo/repo.module";

import { HeaderComponent }      from "./header/header.component";
import { FooterComponent }      from "./footer/footer.component";
import { EntryComponent }       from "./components/entry.component";
import { NotFoundComponent }    from "./components/notFound.component";
import { ApplicationService }   from "./ngrx/service";
import { Routing }              from "./entry.routing";
import { reducer }              from "./entry.reducer"; 

import { DashboardModule }      from "../modules/dashboard/dashboard.module";
import { BlueprintModule }      from "../modules/blueprint/blueprint.module";
import { RevenueModule }        from "../modules/revenue/revenue.module";
import { CostModule }           from "../modules/cost/cost.module";
import { LiquidityModule }      from "../modules/liquidity/liquidity.module";
import { InvestModule }         from "../modules/invest/invest.module";
import { FundsModule }          from "../modules/funds/funds.module";
import { DepreciationModule }   from "../modules/depreciation/depreciation.module";
import { NgxModule }            from "../modules/ngx-redux/ngx.module";

export const IMPORTS_MODULES = [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    Routing,
    DashboardModule,
    BlueprintModule,
    RevenueModule,
    CostModule,
    LiquidityModule,
    InvestModule,
    FundsModule,
    DepreciationModule,
    NgxModule,

    ServiceModule,

    StoreModule.provideStore(reducer),
    [
        EffectsModule.run(CurrencyEffects),
        EffectsModule.run(AppEffects),
        EffectsModule.run(BlueprintEffects),
        EffectsModule.run(RevenueEffects),
        EffectsModule.run(CostEffects),
        EffectsModule.run(DashboardEffects),
        EffectsModule.run(DepreciationEffects),
        EffectsModule.run(FundsEffects),
        EffectsModule.run(InvestEffects),
        EffectsModule.run(LiquidityEffects),
    ], 
    
    // Note that you must instrument after importing StoreModule
    StoreDevtoolsModule.instrumentOnlyWithExtension({
        maxAge: 5
    })
];

@NgModule({
    imports: [...IMPORTS_MODULES],
    declarations: [EntryComponent, HeaderComponent, FooterComponent, NotFoundComponent],
    exports: [EntryComponent, ServiceModule],
    providers: [ApplicationService]
})
export class EntryModule { }
