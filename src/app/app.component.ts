import { Component, OnInit } from '@angular/core';

interface Cliente{
  nome:string,
  cognome:string,
  altezza?:number //altezza?:number => opzionale nella dichiarazione della variabile 'jsonIn',può essere omesso
  indirizzo?:{
    via:    string,
    numero: string,
    cap:    number,
    citta:  string
  }[],
  email: string,
  sesso: 'M' | 'F' | 'Altro',
  dataNascita?: number,
}// dentro 'Interface c'è solo la tippizzazione delle variabile,non inizializiamo o scriviamo funzioni dentro
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  datiAnagrafici = true;
  percorsoStudi = false;
  esperienzeLavorative = false;

  nome='';
  altro='';

  jsonIn:Cliente = {
    nome: '',
    cognome: '',
    indirizzo: [],
    email: '',
    sesso: 'Altro',
  }
  constructor() {}

  ngOnInit(): void {
   
  };
  onDataNascitaChange(){};

  // toggleSezione(nomeSezione: string) {
  //   this.datiAnagrafici = false;
  //   this.percorsoStudi = false;
  //   this.esperienzeLavorative = false;

  //   if(nomeSezione === 'datiAnagrafici') {
  //     this.datiAnagrafici = true;
  //   } else  if(nomeSezione === 'percorsoStudi') {
  //     this.percorsoStudi = true;
  //   } else if(nomeSezione === 'esperienzaLavorative') {
  //     this.esperienzeLavorative = true;
  //   }
  // }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/