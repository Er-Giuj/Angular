import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { DrinkService } from "../_services/drink.service";
import {
  ActivatedRoute,
  ParamMap,
  RouterModule,
  Routes,
} from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  drinks: any = [];
  letter: string = "";
  id: string = "";
  constructor(
    private http: HttpClient,
    private DrinkService: DrinkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // raccoglie il parametro e lo assegna a id,se id è null porta alla pagina principale
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.id = param.get("id") as string; //conversione implicità per evitare che il programma possa prendere il tipologie oltre lo string
      if (this.id === null) {
        this.letter = "a";
      } else {
        this.letter = this.id;
      }
      console.log(this.id);
    });
    // stampa del sito appena eseguito il primo accesso al sito(o refresh)
    this.DrinkService.getElencoDrinks(this.letter).subscribe(
      (response: any) => {
        this.drinks = response.drinks;
      }
    );
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
