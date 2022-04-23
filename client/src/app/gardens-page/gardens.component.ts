import { Component, OnInit } from "@angular/core";
import { Garden } from "../../../../common/interfaces/garden.interface";
import { CommunicationService } from "../communication.service";

@Component({
  selector: "app-gardens",
  templateUrl: "./gardens.component.html",
  styleUrls: ["./gardens.component.css"],
})
export class GardensComponent implements OnInit {
gardens: Garden[];
selectedGarden: Garden;


  public constructor(private communicationService: CommunicationService) { //this.countryService.getCountries().subscribe(countries => this.countries = countries);

  }

  public ngOnInit(): void {

    this.gardens = [];

    this.communicationService.getGardens().subscribe(gardens => this.gardens = gardens);

    // this.gardens.push({idJardin: 'G1', nom: 'myGarden1', surface: 332,
    //
    //     hauteurMax: 20,
    //     typeSol: "string",
    //     ornamentFlag: true,
    //     vergerFlag : true,
    //     potagerFlag : true,
    //     parcels: []});
    // this.gardens.push({idJardin: 'G2', nom: 'myGarden2', surface: 332,
    //
    //     hauteurMax: 20,
    //     typeSol: "string",
    //     ornamentFlag: true,
    //     vergerFlag : true,
    //     potagerFlag : true,
    //     parcels: []});
    // this.gardens.push({_id: 'G2', name: 'myGarden2', area: 734, parcels: []});
    // this.gardens.push({_id: 'G3', name: 'myGarden3', area: 356, parcels: []});
    // this.gardens.push({_id: 'G4', name: 'myGarden4', area: 246, parcels: []});
    // this.gardens.push({_id: 'G5', name: 'myGarden5', area: 898, parcels: []});
    // this.gardens.push({_id: 'G6', name: 'myGarden6', area: 455, parcels: []});

    this.selectedGarden = this.gardens[0];
  }

  public setSelectionAs(garden: Garden) {
    this.selectedGarden = garden;
  }
}
