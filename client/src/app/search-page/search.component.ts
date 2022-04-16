import { Component, OnInit } from "@angular/core";
// import { PlantType } from "../../../../common/interfaces/plant-variety.interface";

@Component({
  selector: "app-gardens",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class Search implements OnInit {
searchFilter: string = '';
plantTypes = ['fsdnv', 'khjfb', 'b nwfs', 'sdfas', 'asfdgdp'];
plantsWithFilter: string[];

  public constructor() {}

  public ngOnInit(): void {
    this.plantsWithFilter = this.plantTypes;
  }

  public applySearchFilter() {
    if(this.searchFilter !== '') this.plantsWithFilter = this.plantTypes.filter((ele) => ele.includes(this.searchFilter));
    else this.plantsWithFilter = this.plantTypes;
  }
}
