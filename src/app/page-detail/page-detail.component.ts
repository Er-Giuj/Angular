import { Component, OnInit } from "@angular/core";
import { DrinkService } from "../_services/drink.service";

@Component({
  selector: "app-page-detail",
  templateUrl: "./page-detail.component.html",
  styleUrls: ["./page-detail.component.css"],
})
export class PageDetailComponent implements OnInit {
  infoDrink: any = [];
  constructor(private DrinkService: DrinkService) {}
  // getInfoDrink() {
  //   this.infoDrink = this.getInfoDrink();
  //   console.log(this.infoDrink);
  //   return this.infoDrink;
  // }
  ngOnInit(): void {
    this.DrinkService.getInfoDrink(15200).subscribe((response: any) => {
      console.log(response);
      console.log(response.driks);

      this.infoDrink = response.drinks[0];
      console.log(this.infoDrink);
      console.log(this.infoDrink[0]);
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
