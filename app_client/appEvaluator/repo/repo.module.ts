import { NgModule } from "@angular/core";
import { HttpModule, JsonpModule } from "@angular/http"

import { StaticModel } from "./repository-static";
import { RestRepo } from "./repository-rest";

import { RestDataSource, REST_URL } from "./datasource-rest";
import { StaticDataSource } from "./datasource-static";

import { ServiceResolver } from "./repo.resolver";

@NgModule({
  imports: [HttpModule, JsonpModule],
  providers: [StaticModel, RestRepo, RestDataSource, StaticDataSource,
    { provide: REST_URL, useValue: "http://localhost:3500" }]
})
export class ServiceModule { }

// { provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }