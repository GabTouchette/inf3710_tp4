import { Component, OnInit } from "@angular/core";
import { PlantType } from "../../../../common/interfaces/plant-type.interface";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class Add implements OnInit {
  newPlantType: PlantType;

  public constructor() {}

  public ngOnInit(): void {
    this.newPlantType = {
      name: '',
      marketDate: new Date(),
      isBio: false,
      seedlingDescription: '',
      plantingDescription: '',
      maintenance: '',
      harvesting: '',
      harvestPeriod: '',
      establishmentPeriod: '',
      comment: ''
    };
  }

  public applySearchFilter() {
  }
}
