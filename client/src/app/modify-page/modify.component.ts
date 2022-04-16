import { Component, OnInit } from "@angular/core";
import { PlantType } from "../../../../common/interfaces/plant-type.interface";

@Component({
  selector: "app-gardens",
  templateUrl: "./modify.component.html",
  styleUrls: ["./modify.component.css"],
})
export class Modify implements OnInit {
plantTypes: PlantType[];

  public constructor() {}

  public ngOnInit(): void {
    this.plantTypes = [];
    this.plantTypes.push({
      name: 'flower',
      marketDate: new Date(),
      isBio: true,
      seedlingDescription: 'very terrible',
      plantingDescription: 'hard af to plant',
      maintenance: 'no',
      harvesting: 'no',
      harvestPeriod: 'long',
      establishmentPeriod: '2 years',
      comment: 'bad plant'
    });
    this.plantTypes.push({
      name: 'flower',
      marketDate: new Date(),
      isBio: true,
      seedlingDescription: 'very terrible',
      plantingDescription: 'hard af to plant',
      maintenance: 'no',
      harvesting: 'no',
      harvestPeriod: 'long',
      establishmentPeriod: '2 years',
      comment: 'bad plant'
    });
    this.plantTypes.push({
      name: 'flower',
      marketDate: new Date(),
      isBio: true,
      seedlingDescription: 'very terrible',
      plantingDescription: 'hard af to plant',
      maintenance: 'no',
      harvesting: 'no',
      harvestPeriod: 'long',
      establishmentPeriod: '2 years',
      comment: 'bad plant'
    });
    this.plantTypes.push({
      name: 'flower',
      marketDate: new Date(),
      isBio: true,
      seedlingDescription: 'very terrible',
      plantingDescription: 'hard af to plant',
      maintenance: 'no',
      harvesting: 'no',
      harvestPeriod: 'long',
      establishmentPeriod: '2 years',
      comment: 'bad plant'
    });
  }

}
