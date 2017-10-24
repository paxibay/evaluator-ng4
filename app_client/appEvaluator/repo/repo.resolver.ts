import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { StaticModel } from "./repository-static"
import { RestDataSource } from "./datasource-rest";
import { Product } from "./repo.model";
import { MessageService } from "../modules/messages/message.service";
import { Message } from "../modules/messages/message.model";

@Injectable()
export class ServiceResolver {

  constructor(
      private model: StaticModel,
    private dataSource: RestDataSource,
    private messages: MessageService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Product[]> {
    if (this.model.getProducts().length == 0) {
      this.messages.reportMessage(new Message("Loading data..."));
      return null; //this.dataSource.blueprintData();
    }
  }
}
