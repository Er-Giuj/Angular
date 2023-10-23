import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  drinks: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .subscribe((response: any) => {
        // this.fatture = response;
        console.log(response);
        this.drinks = response.drinks;
      });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
