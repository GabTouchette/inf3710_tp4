import { Component, OnInit } from "@angular/core";
import { Plant } from "../../../../common/interfaces/plant.interface";

@Component({
  selector: "app-gardens",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class Search implements OnInit {
  searchFilter: string = "";
  plants: Plant[];
  plantsWithFilter: Plant[];

  public constructor() {}

  public ngOnInit(): void {
    this.plants = [];
    this.plantsWithFilter = this.plants;
  }

  public applySearchFilter() {
    if (this.searchFilter !== "") {
      this.plantsWithFilter = this.plants.filter((plant: Plant) =>
        plant.nom.includes(this.searchFilter)
      );
    } else this.plantsWithFilter = this.plants;
  }
}
