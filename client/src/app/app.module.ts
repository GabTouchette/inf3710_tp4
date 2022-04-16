import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Add } from "./add-page/add.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommunicationService } from "./communication.service";
import { GardensComponent } from "./gardens-page/gardens.component";
import { Modify } from "./modify-page/modify.component";
import { Search } from "./search-page/search.component";

@NgModule({
  declarations: [
    AppComponent,
    GardensComponent,
    Modify,
    Search,
    Add
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
