import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { ProfiloComponent } from "./profilo/profilo.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./_services/api.service";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HomeComponent, ProfiloComponent],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
