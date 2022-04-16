import { Component, OnInit } from "@angular/core";
import { Garden } from "../../../../common/interfaces/garden.interface";

@Component({
  selector: "app-gardens",
  templateUrl: "./gardens.component.html",
  styleUrls: ["./gardens.component.css"],
})
export class GardensComponent implements OnInit {
gardens: Garden[];
selectedGarden: Garden;

  public constructor() {}

  public ngOnInit(): void {
    this.gardens = [];
    this.gardens.push(
      {
        _id: 'G0', 
        name: 'myGarden0', 
        area: 634, 
        parcels: [
          {
            dimensions: '400m x 500m',
            rows: [
              {
                number: 0,
                coords: [3,4],
                fallowPeriod: [new Date(), new Date()],
              },
              {
                number: 0,
                coords: [3,4],
                fallowPeriod: [new Date(), new Date()],
              },
              {
                number: 0,
                coords: [3,4],
                fallowPeriod: [new Date(), new Date()],
              }
            ]
          },
          {
            dimensions: '400m x 500m',
            rows: [
              {
                number: 0,
                coords: [3,4],
                fallowPeriod: [new Date(), new Date()],
              },
              {
                number: 0,
                coords: [3,4],
                fallowPeriod: [new Date(), new Date()],
              },
              {
                number: 0,
                coords: [3,4],
                fallowPeriod: [new Date(), new Date()],
              }
            ]
          }
        ]}
    );
    this.gardens.push({_id: 'G1', name: 'myGarden1', area: 332, parcels: []});
    this.gardens.push({_id: 'G2', name: 'myGarden2', area: 734, parcels: []});
    this.gardens.push({_id: 'G3', name: 'myGarden3', area: 356, parcels: []});
    this.gardens.push({_id: 'G4', name: 'myGarden4', area: 246, parcels: []});
    this.gardens.push({_id: 'G5', name: 'myGarden5', area: 898, parcels: []});
    this.gardens.push({_id: 'G6', name: 'myGarden6', area: 455, parcels: []});

    this.selectedGarden = this.gardens[0];
  }

  public setSelectionAs(garden: Garden) {
    this.selectedGarden = garden;
  }
}
