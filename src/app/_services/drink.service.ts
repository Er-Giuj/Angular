import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class DrinkService {
  constructor(private apiService: ApiService) {}
  // component:
  //  drinkService.getElencoDrinks
  //  	apiService.searchByF
  //  		http.get
  //Ecco cosa succede quando faccio la ricerca per lettera
  getElencoDrinks(letter: string) {
    return this.apiService.searchByF(letter);
  }
  getInfoDrink(id: number) {
    return this.apiService.getInfoDrink(id);
  }
}
