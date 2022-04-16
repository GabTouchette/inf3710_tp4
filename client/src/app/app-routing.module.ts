import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Add } from "./add-page/add.component";

import { AppComponent } from "./app.component";
import { GardensComponent } from "./gardens-page/gardens.component";
import { Modify } from "./modify-page/modify.component";
import { Search } from "./search-page/search.component";

const routes: Routes = [
  { path: "app", component: AppComponent },
  { path: "gardens", component: GardensComponent },
  { path: "modify", component: Modify },
  { path: "search", component: Search },
  { path: "add", component: Add },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }