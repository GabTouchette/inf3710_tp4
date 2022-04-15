import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { GardensComponent } from "./gardens/gardens.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "gardens", component: GardensComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }