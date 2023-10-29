import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  //corretta maniera di inizializzare e usare le APi visto che potrebbero essere molte
  baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
  searchByF(firstLetter: string) {
    return this.http.get(this.baseUrl + "search.php?f=" + firstLetter);
  }
}
