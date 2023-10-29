import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { PageDetailComponent } from "./page-detail/page-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "page-detail", component: PageDetailComponent },
  // { path: 'profilo', component: ProfiloComponent },
  // { path: '**', component: AppComponent },  // Wildcard route for a 404 page
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
