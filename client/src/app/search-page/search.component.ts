import { Component, OnInit } from "@angular/core";
import { Plant } from "../../../../common/interfaces/plant.interface";
import { CommunicationService } from "../communication.service";

@Component({
  selector: "app-gardens",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class Search implements OnInit {
  searchFilter: string = "";
  plants: Plant[];
  plantsWithFilter: Plant[];

  public constructor(private communicationService: CommunicationService) {}

  public ngOnInit(): void {
    this.plants= [];
    // this.plants=this.plantsWithFilter;

    this.plantsWithFilter = [];

    this.communicationService.getPlants(this.searchFilter).subscribe(plants => this.plantsWithFilter = plants);



  }

  public applySearchFilter() {

    // this solutions doesn't use SQL commands

        // if (this.searchFilter !== "") {
        //   this.plantsWithFilter = this.plants.filter((plant: Plant) =>
        //     plant.nom.includes(this.searchFilter)
        //   );
        // } else this.plantsWithFilter = this.plants;

    //this one does
    this.communicationService.getPlants(this.searchFilter).subscribe(plants => this.plantsWithFilter = plants);


  }
}
