import { Component, Inject } from "@angular/core";

@Component({
  selector: "pricing",
  templateUrl: "pricing.component.html"
})
export class PricingComponent {
  title = 'app works!';
  price = 140;
  description = "this is description";

  model;

  constructor() {
      this.model = {
          sex: "female"
      };
  }

}